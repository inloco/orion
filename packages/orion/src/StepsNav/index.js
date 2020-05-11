import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from '../Icon'

const StepsNav = ({ steps, currentStep, className }) => {
  return (
    <div className={cx('orion steps-nav', className)}>
      {steps.map((step, index) => {
        const active = index === currentStep
        const done = index < currentStep
        const last = index === steps.length - 1

        const text = step.text || step

        return (
          <React.Fragment key={index}>
            <div className={cx('steps-nav-step', { active: active })}>
              <div className="steps-nav-step-index-container">
                <div className="steps-nav-separator steps-nav-index-separator" />
                <div className="steps-nav-step-index">
                  {done ? (
                    <Icon name="done" color="space-600" />
                  ) : (
                    <div>{index + 1}</div>
                  )}
                </div>
                <div className="steps-nav-separator steps-nav-index-separator" />
              </div>
              <div className="steps-nav-step-name">{text}</div>
              {step.description && (
                <div className="steps-nav-step-description">
                  {step.description}
                </div>
              )}
            </div>
            {!last && <div className="steps-nav-separator"></div>}
          </React.Fragment>
        )
      })}
    </div>
  )
}

StepsNav.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        description: PropTypes.string
      })
    ])
  ).isRequired,
  currentStep: PropTypes.number.isRequired,
  className: PropTypes.string
}

export default StepsNav
