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
          <React.Fragment>
            <div className={cx('orion stepsnav-step', { active: active })}>
              <div className="orion stepsnav-step-index-container">
                <div
                  className={cx('orion stepsnav-separator-start', {
                    'opacity-0': index === 0
                  })}
                />
                <div className="stepsnav-step-index">
                  {done ? <Icon name="done" /> : <div>{index + 1}</div>}
                </div>
                <div
                  className={cx('orion stepsnav-separator-end', {
                    'opacity-0': index === stepNames.length - 1
                  })}
                />
              </div>
              {<div className="stepsnav-step-name">{stepName}</div>}
            </div>
            {index < stepNames.length - 1 && (
              <div className="orion stepsnav-separator"></div>
            )}
          </React.Fragment>
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
