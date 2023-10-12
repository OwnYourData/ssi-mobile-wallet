import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ImageAttributes} from '@sphereon/ui-components.core';
import {SSICredentialCardView} from '@sphereon/ui-components.ssi-react-native';
import SSIPrimaryButton from '../../components/buttons/SSIPrimaryButton';
import SSISecondaryButton from '../../components/buttons/SSISecondaryButton';
import SSIActivityView from '../../components/views/SSIActivityView';
import SSICredentialDetailsView from '../../components/views/SSICredentialDetailsView';
import SSITabView from '../../components/views/SSITabView';
import {getCredentialStatus} from '../../utils/CredentialUtils';
import {getIssuerLogo} from '../../utils/mappers/credential/CredentialMapper';
import {translate} from '../../localization/Localization';
import {
  SSICredentialDetailsScreenButtonContainer as ButtonContainer,
  SSICredentialDetailsScreenButtonContentContainer as ButtonContainerContent,
  SSICredentialDetailsScreenCredentialCardContainer as CardContainer,
  SSIBasicHorizontalCenterContainerStyled as Container,
  SSICredentialDetailsScreenContentContainer as ContentContainer,
  SSIStatusBarDarkModeStyled as StatusBar,
} from '../../styles/components';
import {ICredentialSummary, ITabViewRoute, ScreenRoutesEnum, StackParamList} from '../../types';

type Props = NativeStackScreenProps<StackParamList, ScreenRoutesEnum.CREDENTIAL_DETAILS>;

enum CredentialTabRoutesEnum {
  INFO = 'info',
  ACTIVITY = 'activity',
}

const getCredentialCardLogo = (credential: ICredentialSummary): ImageAttributes | undefined => {
  if (credential.branding?.logo?.uri || credential.branding?.logo?.dataUri) {
    return credential.branding.logo;
  }

  const uri: string | undefined = getIssuerLogo(credential, credential.branding);
  if (uri) {
    return {uri};
  }
};

const SSICredentialDetailsScreen: FC<Props> = (props: Props): JSX.Element => {
  const {credential, primaryAction, secondaryAction, showActivity = false} = props.route.params;
  const issuer = credential.issuer.alias;
  const credentialCardLogo: ImageAttributes | undefined = getCredentialCardLogo(credential);

  const routes: Array<ITabViewRoute> = [
    {
      key: CredentialTabRoutesEnum.INFO,
      title: translate('credential_details_info_tab_header_label'),
      content: () => <SSICredentialDetailsView credentialProperties={credential.properties} issuer={issuer} />,
    },
    ...(showActivity
      ? [
          {
            key: CredentialTabRoutesEnum.ACTIVITY,
            title: translate('credential_details_activity_tab_header_label'),
            content: () => <SSIActivityView />,
          },
        ]
      : []),
  ];

  return (
    <Container>
      <StatusBar />
      <ContentContainer>
        <CardContainer>
          <SSICredentialCardView
            header={{
              credentialTitle: credential.title ?? credential.branding?.alias,
              credentialSubtitle: credential.branding?.description,
              logo: credentialCardLogo,
            }}
            body={{
              issuerName: issuer ?? credential.issuer.name,
            }}
            footer={{
              credentialStatus: getCredentialStatus(credential),
              expirationDate: credential.expirationDate,
            }}
            display={{
              backgroundColor: credential.branding?.background?.color,
              backgroundImage: credential.branding?.background?.image,
              textColor: credential.branding?.text?.color,
            }}
          />
        </CardContainer>
        <SSITabView routes={routes} />
        {/* TODO we use this 2 button structure a lot, we should make a component out of it */}
        {(primaryAction || secondaryAction) && (
          <ButtonContainer>
            <ButtonContainerContent>
              {secondaryAction && (
                <SSISecondaryButton
                  title={secondaryAction.caption}
                  onPress={secondaryAction.onPress}
                  // TODO move styling to styled components (currently there is an issue where this styling prop is not being set correctly)
                  style={{
                    height: 42,
                    minWidth: 160.5,
                    width: primaryAction ? undefined : '100%',
                  }}
                />
              )}
              {primaryAction && (
                <SSIPrimaryButton
                  title={primaryAction.caption}
                  onPress={primaryAction.onPress}
                  // TODO move styling to styled components (currently there is an issue where this styling prop is not being set correctly)
                  style={{
                    height: 42,
                    minWidth: 160.5,
                    width: secondaryAction ? undefined : '100%',
                  }}
                />
              )}
            </ButtonContainerContent>
          </ButtonContainer>
        )}
      </ContentContainer>
    </Container>
  );
};

export default SSICredentialDetailsScreen;
