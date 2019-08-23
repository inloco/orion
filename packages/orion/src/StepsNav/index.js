import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from '../Icon'

const StepsNav = ({ steps, currentStep, className }) => {
  return (
    <div className={cx('orion steps-nav', className)}>
      {steps.map((name, index) => {
        const active = index === currentStep
        const done = index < currentStep
        const last = index === steps.length - 1

        return (
          <React.Fragment key={index}>
            <div className={cx('steps-nav-step', { active: active })}>
              <div className="steps-nav-step-index-container">
                <div className="steps-nav-separator steps-nav-index-separator" />
                <div className="steps-nav-step-index">
                  {done ? <Icon name="done" /> : <div>{index + 1}</div>}
                </div>
                <div className="steps-nav-separator steps-nav-index-separator" />
              </div>
              {<div className="steps-nav-step-name">{name}</div>}
            </div>
            {!last && <div className="steps-nav-separator"></div>}
          </React.Fragment>
        )
      })}
    </div>
  )
}

StepsNav.propTypes = {
  steps: PropTypes.array.isRequired,
  currentStep: PropTypes.number.isRequired,
  className: PropTypes.string
}

export default StepsNav
