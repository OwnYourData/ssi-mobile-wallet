import { CheckLinkedDomain, VerifiedAuthorizationRequest } from '@sphereon/did-auth-siop'
import { ConnectionTypeEnum, IDidAuthConfig } from '@sphereon/ssi-sdk-data-store'
import { OpSession, VerifiablePresentationWithDefinition } from '@sphereon/ssi-sdk-did-auth-siop-authenticator'
import Debug from 'debug'

import { APP_ID } from '../../@config/constants'
import { ScreenRoutesEnum } from '../../types'
import agent, {didMethodsSupported} from '../../agent'
import { FindCredentialsArgs, IIdentifier } from '@veramo/core'
import { VerifiableCredentialsWithDefinition } from '@sphereon/ssi-sdk-did-auth-siop-authenticator/src/types/IDidAuthSiopOpAuthenticator'
import { OID4VP } from '@sphereon/ssi-sdk-did-auth-siop-authenticator/dist/session/OID4VP'
import { getKey } from '@sphereon/ssi-sdk-did-auth-siop-authenticator/dist/session/functions'
import RootNavigation from '../../navigation/rootNavigation'

const debug = Debug(`${APP_ID}:authentication`)

export const siopGetRequest = async (
  config: IDidAuthConfig
  // customApproval?: CustomApproval
): Promise<VerifiedAuthorizationRequest> => {
  const session = await siopGetSession(config.sessionId).catch(
    async () => await siopRegisterSession({ requestJwtOrUri: config.redirectUrl, sessionId: config.sessionId })
  )

  console.log(`session: ${JSON.stringify(session.id, null, 2)}`)
  const verifiedAuthorizationRequest = await session.getAuthorizationRequest()
  console.log('Request: ' + JSON.stringify(verifiedAuthorizationRequest, null, 2))
  /*if (customApproval && typeof customApproval !== 'string') {
    await customApproval(authRequest)
  } else {*/

  // }

  RootNavigation.navigate(ScreenRoutesEnum.PEX_VERIFICATION, {
    request: verifiedAuthorizationRequest,
    sessionId: session.id
  })
  return verifiedAuthorizationRequest
}

export const siopGetSession = async (sessionId: string): Promise<OpSession> => {
  return agent.siopGetOPSession({ sessionId })
}

export const siopRegisterSession = async ({
  requestJwtOrUri,
  sessionId
}: {
  requestJwtOrUri: string
  sessionId?: string
}): Promise<OpSession> => {
  return agent.siopRegisterOPSession({
    sessionId,
    op: {
      checkLinkedDomains: CheckLinkedDomain.NEVER, // fixme: check whether it works and enable
      supportedDIDMethods: didMethodsSupported,

    },
    requestJwtOrUri
  })
}

// todo: We would need to include the wallet user after this method!
export const siopSelectCredentials = async (
  oid4vp: OID4VP,
  credentialsFilter?: FindCredentialsArgs
): Promise<VerifiableCredentialsWithDefinition[]> => {
  return await oid4vp.filterCredentialsAgainstAllDefinitions({ filter: credentialsFilter })
}

// todo: We would need to include the wallet user before this method!
export const siopCreateVerifiablePresentations = async (
  oid4vp: OID4VP,
  selectedCredentials: VerifiableCredentialsWithDefinition[],
  identifier: IIdentifier
): Promise<VerifiablePresentationWithDefinition[]> => {
  return await oid4vp.createVerifiablePresentations(selectedCredentials, {identifierOpts: {identifier}})
}

export const siopSendAuthorizationResponse = async (
  connectionType: ConnectionTypeEnum,
  args: {
    sessionId: string
  }
) => {
  if (connectionType !== ConnectionTypeEnum.SIOPV2_OIDC4VP) {
    return Promise.reject(Error(`No supported authentication provider for type: ${connectionType}`))
  }
  const session = await agent.siopGetOPSession({ sessionId: args.sessionId,  })
  const identifiers = await session.getSupportedIdentifiers()
  if (!identifiers || identifiers.length === 0) {
    throw Error(`No DID methods found in agent that are supported by the relying party`)
  }

  // todo: This should be moved to code calling the sendAuthorizationResponse (this) method, as to allow the user to subselect and approve credentials!
  let presentationsAndDefs: VerifiablePresentationWithDefinition[] | undefined
  let identifier: IIdentifier = identifiers[0]
  if (await session.isOID4VP()) {
    const oid4vp = await session.getOID4VP()
    const credsAndDefs = await siopSelectCredentials(oid4vp)
    presentationsAndDefs = await siopCreateVerifiablePresentations(oid4vp, credsAndDefs, identifier)
    if (!presentationsAndDefs || presentationsAndDefs.length === 0) {
      throw Error('No verifiable presentations could be created')
    }
    identifier = presentationsAndDefs[0].identifierOpts.identifier
  }
  const kid = (await getKey(identifier, 'authentication', session.context)).kid

  const response = session.sendAuthorizationResponse({
    verifiablePresentations: presentationsAndDefs?.map((pd) => pd.presentation),
    responseSignerOpts: { identifier, kid }
  })
  return response
}
