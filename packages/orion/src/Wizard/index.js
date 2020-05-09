import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

import StepsNav from '../StepsNav'
import WizardControls, { WizardButtons } from './WizardControls'
import { scrollToTop } from '../utils/scroll'

const Wizard = ({
  children,
  className,
  currentStepIndex: currentStepProp,
  onStepIndexChange,
  steps,
  buttons,
  autoScrollOnStepChange
}) => {
  const [currentStepState, setCurrentStepState] = useState(currentStepProp || 0)
  const currentStepIndex = _.isNil(currentStepProp)
    ? currentStepState
    : currentStepProp

  const handleStepChange = newStep => {
    setCurrentStepState(newStep)
    onStepIndexChange(newStep)
  }

  useEffect(() => {
    autoScrollOnStepChange && scrollToTop()
  }, [autoScrollOnStepChange, currentStepState])

  return (
    <div className={cx('orion wizard', className)}>
      <StepsNav currentStep={currentStepIndex} steps={steps} />
      <div className="wizard-step">
        {React.Children.toArray(children)[currentStepIndex]}
      </div>

      <WizardControls
        buttons={buttons}
        currentStepIndex={currentStepIndex}
        onStepIndexChange={handleStepChange}
        totalSteps={steps.length}
      />
    </div>
  )
}

Wizard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  currentStepIndex: PropTypes.number,
  onStepIndexChange: PropTypes.func,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttons: PropTypes.object,
  autoScrollOnStepChange: PropTypes.bool
}

Wizard.defaultProps = {
  buttons: {
    [WizardButtons.BACK]: 'Back',
    [WizardButtons.NEXT]: 'Next',
    [WizardButtons.FINISH]: 'Finish'
  },
  onStepIndexChange: () => {},
  autoScrollOnStepChange: false
}

Wizard.Buttons = WizardButtons

export default Wizard
