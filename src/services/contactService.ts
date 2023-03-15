import { IConnection, IContact } from '@sphereon/ssi-sdk-data-store'
import Debug from 'debug'

import { APP_ID } from '../@config/constants'
import { cmAddIdentity, cmAddContact, cmGetContacts } from '../agent'
import { IAddIdentityArgs, ICreateContactArgs, IGetContactsArgs } from '../types'

const debug = Debug(`${APP_ID}:contactService`)

export const getContacts = async (args?: IGetContactsArgs): Promise<Array<IContact>> => {
  debug(`getContacts(${JSON.stringify(args)})...`)
  return cmGetContacts(args)
}

export const createContact = async (args: ICreateContactArgs): Promise<IContact> => {
  debug(`createContact(${JSON.stringify(args)})...`)
  return cmAddContact(args)
    .then((contact: IContact) => {
      debug(`createContact(${JSON.stringify(args)}) succeeded`)
      return contact
    })
    .catch((error: Error) => Promise.reject(Error(`Unable to create contact. Error: ${error}`)))
}

export const addIdentity = async (args: IAddIdentityArgs): Promise<IConnection> => {
  debug(`addIdentity(${JSON.stringify(args)})...`)
  return cmAddIdentity({ contactId: args.contactId, identity: args.identity })
    .then((connection: IConnection) => {
      debug(`addIdentity(${JSON.stringify(connection)}) succeeded`)
      return connection
    })
    .catch((error: Error) =>
      Promise.reject(Error(`Unable to add identity to contact ${args.contactId}. Error: ${error}`))
    )
}
