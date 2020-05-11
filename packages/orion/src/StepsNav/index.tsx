import React, { FunctionComponent } from 'react'
import cx from 'classnames'

import Icon from '../Icon'

const StepsNav: FunctionComponent<StepNavProps> = ({
  steps,
  currentStep,
  className
}) => {
  return (
    <div className={cx('orion steps-nav', className)}>
      {steps.map((step, index) => {
        const active = index === currentStep
        const done = index < currentStep
        const last = index === steps.length - 1

        const text = isStepObject(step) ? step.text : step
        const description = isStepObject(step) ? step.description : null

        return (
          <React.Fragment key={index}>
            <div className={cx('steps-nav-step', { active: active })}>
              <div className="steps-nav-step-index-container">
                <div className="steps-nav-separator steps-nav-index-separator" />
                <div className="steps-nav-step-index">
                  {done ? (
                    <Icon
                      name="done"
                      color="space-600"
                      as={null}
                      className=""
                    />
                  ) : (
                    <div>{index + 1}</div>
                  )}
                </div>
                <div className="steps-nav-separator steps-nav-index-separator" />
              </div>
              <div className="steps-nav-step-name">{text}</div>
              {description && (
                <div className="steps-nav-step-description">{description}</div>
              )}
            </div>
            {!last && <div className="steps-nav-separator"></div>}
          </React.Fragment>
        )
      })}
    </div>
  )
}

function isStepObject(step: any): step is StepObject {
  return (step as StepObject).text !== undefined
}

type StepObject = {
  text: string
  description?: string
}

type StepNavProps = {
  steps: Array<string | StepObject>
  currentStep: number
  className?: string
}

export default StepsNav
