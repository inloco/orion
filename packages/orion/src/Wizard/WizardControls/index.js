import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import Button from '../../Button'

export const WizardButtons = {
  CANCEL: 'cancel',
  SAVE: 'save',
  BACK: 'back',
  NEXT: 'next',
  FINISH: 'finish'
}

const WizardControls = ({
  buttons,
  currentStepIndex,
  onStepIndexChange,
  totalSteps
}) => {
  const isLastStep = currentStepIndex === totalSteps - 1

  const overrideOnClick = onClickFromWizard => predefinedProps => ({
    onClick: e => {
      _.invoke(predefinedProps, 'onClick', e, predefinedProps)
      onClickFromWizard()
    }
  })

  return (
    <div className="wizard-controls">
      {buttons[WizardButtons.CANCEL] &&
        Button.create(buttons[WizardButtons.CANCEL], {
          autoGenerateKey: false,
          defaultProps: {
            type: 'button'
          }
        })}

      {buttons[WizardButtons.SAVE] &&
        !isLastStep &&
        Button.create(buttons[WizardButtons.SAVE], {
          autoGenerateKey: false,
          defaultProps: {
            type: 'submit'
          }
        })}
      <div className="wizard-controls-right">
        {currentStepIndex > 0 &&
          Button.create(buttons[WizardButtons.BACK], {
            autoGenerateKey: false,
            defaultProps: {
              type: 'button'
            },
            overrideProps: overrideOnClick(() =>
              onStepIndexChange(currentStepIndex - 1)
            )
          })}
        {!isLastStep &&
          Button.create(buttons[WizardButtons.NEXT], {
            autoGenerateKey: false,
            defaultProps: {
              className: 'blue',
              primary: true,
              type: 'submit'
            },
            overrideProps: overrideOnClick(() =>
              onStepIndexChange(currentStepIndex + 1)
            )
          })}
        {isLastStep &&
          Button.create(buttons[WizardButtons.FINISH], {
            autoGenerateKey: false,
            defaultProps: {
              className: 'blue',
              primary: true,
              type: 'submit'
            }
          })}
      </div>
    </div>
  )
}

WizardControls.propTypes = {
  buttons: PropTypes.shape({
    [WizardButtons.BACK]: PropTypes.any,
    [WizardButtons.SAVE]: PropTypes.any,
    [WizardButtons.NEXT]: PropTypes.any,
    [WizardButtons.FINISH]: PropTypes.any
  }),
  currentStepIndex: PropTypes.number.isRequired,
  onStepIndexChange: PropTypes.func,
  totalSteps: PropTypes.number.isRequired
}

WizardControls.defaultProps = {
  buttons: {
    [WizardButtons.BACK]: 'Back',
    [WizardButtons.NEXT]: 'Next',
    [WizardButtons.FINISH]: 'Finish'
  },
  onStepIndexChange: () => {}
}

export default WizardControls
