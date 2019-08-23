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
        const first = index === 0
        const last = index === stepNames.length - 1

        return (
          <React.Fragment>
            <div className={cx('stepsnav-step', { active: active })}>
              <div className="stepsnav-step-index-container">
                <div
                  className={cx('stepsnav-index-separator', {
                    'opacity-0': first
                  })}
                />
                <div className="stepsnav-step-index">
                  {done ? <Icon name="done" /> : <div>{index + 1}</div>}
                </div>
                <div
                  className={cx('stepsnav-index-separator', {
                    'opacity-0': last
                  })}
                />
              </div>
              {<div className="stepsnav-step-name">{stepName}</div>}
            </div>
            {!last && <div className="stepsnav-separator"></div>}
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
