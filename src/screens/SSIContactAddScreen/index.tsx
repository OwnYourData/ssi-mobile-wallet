import React, { PureComponent } from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/native-stack'
import { connect } from 'react-redux'

import { ScreenRoutesEnum, StackParamList } from '../../@types'
import { ICreateContactArgs } from '../../@types/store/contact.action.types'
import SSIPrimaryButton from '../../components/buttons/SSIPrimaryButton'
import SSISecondaryButton from '../../components/buttons/SSISecondaryButton'
import SSICheckbox from '../../components/fields/SSICheckbox'
import SSITextInputField from '../../components/fields/SSITextInputField'
import { translate } from '../../localization/Localization'
import { getContacts } from '../../services/contactService'
import { createContact as StoreContact } from '../../store/actions/contact.actions'
import {
  SSIButtonBottomMultipleContainerStyled as ButtonContainer,
  SSIContactAddScreenDisclaimerCheckboxContainerStyled as CheckboxContainer,
  SSIContactAddScreenContainerStyled as Container,
  SSIContactAddScreenDisclaimerCaptionStyled as DisclaimerCaption,
  SSIContactAddScreenDisclaimerContainerStyled as DisclaimerContainer,
  SSIButtonSpacerStyled as Spacer,
  SSIStatusBarDarkModeStyled as StatusBar
} from '../../styles/components'

interface IScreenProps extends NativeStackScreenProps<StackParamList, ScreenRoutesEnum.CONTACT_ADD> {
  createContact: (args: ICreateContactArgs) => void
}

class SSIContactAddScreen extends PureComponent<IScreenProps> {
  state = {
    contactAlias: undefined,
    hasConsent: true,
    isInvalidContactAlias: false
  }

  onCreate = async (): Promise<void> => {
    const { name, uri, identifier, onCreate } = this.props.route.params
    const { contactAlias } = this.state

    if (!contactAlias) {
      return
    }

    this.props.createContact({
      name,
      alias: contactAlias,
      uri,
      identifier
    })

    onCreate()
  }

  render() {
    const { contactAlias, hasConsent, isInvalidContactAlias } = this.state

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <Container>
        <StatusBar/>
        <SSITextInputField
          autoFocus={true}
          label={translate('contact_add_contact_name_label')}
          maxLength={50}
          onEndEditing={async (input: string) => {
            if (input === undefined || input.length === 0) {
              this.setState({ ...this.state, contactAlias: input, isInvalidContactAlias: true })
              return Promise.reject(Error(translate('contact_add_contact_name_invalid_name_message')))
            }

            const contacts = await getContacts({ filter: [{ name: input }] })
            if (contacts.length !== 0) {
              this.setState({ ...this.state, contactAlias: input, isInvalidContactAlias: true })
              return Promise.reject(Error(translate('contact_add_contact_name_invalid_name_message')))
            }

            this.setState({ ...this.state, contactAlias: input, isInvalidContactAlias: false })
          }}
          placeholderValue={translate('contact_add_contact_name_placeholder')}
        />
        <DisclaimerContainer>
          <CheckboxContainer>
            <SSICheckbox
              initialValue
              onValueChange={async (isChecked: boolean) => this.setState({ ...this.state, hasConsent: isChecked })}
            />
          </CheckboxContainer>
          <DisclaimerCaption>{translate('contact_add_disclaimer')}</DisclaimerCaption>
        </DisclaimerContainer>
        <ButtonContainer>
          <SSISecondaryButton
            title={translate('action_decline_label')}
            onPress={() => this.props.navigation.goBack()}
            // TODO move styling to styled components (currently there is an issue where this styling prop is not being set correctly)
            style={{ height: 42, width: 145 }}
          />
          <Spacer />
          <SSIPrimaryButton
            title={translate('action_accept_label')}
            onPress={this.onCreate}
            disabled={!hasConsent || contactAlias === undefined || contactAlias === '' || isInvalidContactAlias}
            // TODO move styling to styled components (currently there is an issue where this styling prop is not being set correctly)
            style={{ height: 42, width: 145 }}
          />
        </ButtonContainer>
      </Container>
        </TouchableWithoutFeedback>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    createContact: (args: ICreateContactArgs) => dispatch(StoreContact(args))
  }
}

export default connect(null, mapDispatchToProps)(SSIContactAddScreen)
