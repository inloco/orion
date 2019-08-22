import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from '../Icon'

const StepsNav = ({ stepNames, currentStep, className }) => {
  return (
    <div className={cx('orion stepsnav', className)}>
      {stepNames.map((stepName, index) => {
        const active = index === currentStep
        const done = index < currentStep

        return (
          <div
            className={cx('orion stepsnav-step', { active: active })}
            key={index}>
            <div className="stepsnav-step-index">
              {done ? <Icon name="done" /> : <div>{index + 1}</div>}
            </div>
            {<div className="stepsnav-step-name">{stepName}</div>}
          </div>
        )
      })}
    </div>
  )
}

StepsNav.propTypes = {
  stepNames: PropTypes.array.isRequired,
  currentStep: PropTypes.number.isRequired,
  className: PropTypes.string
}

export default StepsNav
