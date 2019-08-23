import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from '../Icon'

const StepsNav = ({ steps, currentStep, className }) => {
  return (
    <div className={cx('orion stepsnav', className)}>
      {steps.map((name, index) => {
        const active = index === currentStep
        const done = index < currentStep
        const first = index === 0
        const last = index === steps.length - 1

        return (
          <React.Fragment key={index}>
            <div className={cx('stepsnav-step', { active: active })}>
              <div className="stepsnav-step-index-container">
                <div
                  className={cx('stepsnav-separator stepsnav-index-separator', {
                    hidden: first
                  })}
                />
                <div className="stepsnav-step-index">
                  {done ? <Icon name="done" /> : <div>{index + 1}</div>}
                </div>
                <div
                  className={cx('stepsnav-separator stepsnav-index-separator', {
                    hidden: last
                  })}
                />
              </div>
              {<div className="stepsnav-step-name">{name}</div>}
            </div>
            {!last && <div className="stepsnav-separator"></div>}
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
