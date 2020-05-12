import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Reactour from 'reactour'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import { Button, Portal } from '..'

import Anchor from './Anchor'
import Badge from './Badge'
import TourHelper from './TourHelper'
import TourModal from './TourModal'
import {
  getAnchorClassName,
  parseSteps,
  BadgeDistance,
  BadgePosition,
  useBadgePosition,
  DEFAULT_PADDING,
  DEFAULT_RADIUS
} from './utils'

function Tour({
  className,
  steps,
  welcomeModal,
  dismissButtonTitle,
  nextButtonTitle,
  prevButtonTitle,
  finishButtonTitle,
  onFinish,
  onDismiss
}) {
  const [currentStep, setCurrentStep] = useState(welcomeModal ? null : 0)
  const [openTour, setOpenTour] = useState(!welcomeModal)
  const [openModal, setOpenModal] = useState(!!welcomeModal)
  const tourSteps = useMemo(() => parseSteps(steps), [steps])
  const badgePosition = useBadgePosition(tourSteps, currentStep)

  useEffect(() => {
    disableBodyScroll()
    return () => enableBodyScroll()
  }, [])

  function handleStepActions(stepIndex, nextStepIndex) {
    const actionBefore = tourSteps[nextStepIndex]?.actionBefore
    const actionAfter = tourSteps[stepIndex]?.actionAfter
    actionAfter && actionAfter()
    actionBefore && actionBefore()
  }

  function handleNextStep() {
    if (currentStep + 1 < steps.length) {
      handleStepActions(currentStep, currentStep + 1)
      setCurrentStep(step => step + 1)
    }
  }

  function handlePreviousStep() {
    if (currentStep > 0) {
      handleStepActions(currentStep, currentStep - 1)
      setCurrentStep(step => step - 1)
    }
  }

  return (
    <>
      <TourModal
        open={openModal}
        onContinue={() => {
          setOpenModal(false)
          setOpenTour(true)
          setCurrentStep(0)
        }}
        {...welcomeModal}
      />
      <Reactour
        className={className}
        rounded={tourSteps[currentStep]?.radius || DEFAULT_RADIUS}
        maskSpace={tourSteps[currentStep]?.padding || DEFAULT_PADDING}
        isOpen={openTour}
        steps={tourSteps}
        closeWithMask={false}
        CustomHelper={TourHelper}
        onBeforeClose={() => enableBodyScroll()}
        onRequestClose={() => {
          setOpenTour(false)
          handleStepActions(currentStep)
          onDismiss && onDismiss()
        }}
        goToStep={currentStep}
        getCurrentStep={setCurrentStep}
        nextStep={handleNextStep}
        prevStep={handlePreviousStep}
        maskClassName={cx('orion-tour-mask', {
          clear: tourSteps[currentStep]?.anchor
        })}
        highlightedMaskClassName="orion-tour-highlight-mask"
        disableInteraction>
        <Portal open>
          <div className="orion-tour-portal">
            <Badge position={badgePosition} />
            {tourSteps.map(({ anchor }, i) =>
              anchor ? (
                <Anchor
                  key={i}
                  className={getAnchorClassName(i)}
                  position={anchor}
                />
              ) : null
            )}
          </div>
        </Portal>
        <div className="orion-tour-controls">
          <ul className="space-x-8">
            {steps.map((_step, i) => (
              <li
                key={i}
                className={cx('orion-tour-dot', { current: currentStep === i })}
              />
            ))}
          </ul>
          <div className="orion-tour-buttons space-x-16">
            <Button
              subtle
              onClick={() => {
                setOpenTour(false)
                handleStepActions(currentStep)
                onDismiss && onDismiss()
              }}
              content={dismissButtonTitle}
            />
            {currentStep > 0 && (
              <Button
                subtle
                onClick={handlePreviousStep}
                content={prevButtonTitle}
              />
            )}
            {currentStep + 1 >= steps.length ? (
              <Button
                subtle
                primary
                onClick={() => {
                  setOpenTour(false)
                  handleStepActions(currentStep)
                  onFinish && onFinish()
                }}
                content={finishButtonTitle}
              />
            ) : (
              <Button
                subtle
                primary
                onClick={handleNextStep}
                content={nextButtonTitle}
              />
            )}
          </div>
        </div>
      </Reactour>
    </>
  )
}

Tour.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      selector: PropTypes.string,
      anchor: PropTypes.shape({
        top: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired
      }),
      title: PropTypes.string,
      content: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
      padding: PropTypes.number,
      badgePosition: PropTypes.oneOf(Object.values(BadgePosition)),
      badgeDistance: PropTypes.oneOfType([
        PropTypes.oneOf(Object.keys(BadgeDistance)),
        PropTypes.number
      ]),
      position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
      radius: PropTypes.number,
      actionBefore: PropTypes.func,
      actionAfter: PropTypes.func
    })
  ).isRequired,
  welcomeModal: PropTypes.shape({
    content: PropTypes.node,
    buttonTitle: PropTypes.string
  }),
  dismissButtonTitle: PropTypes.string.isRequired,
  nextButtonTitle: PropTypes.string.isRequired,
  prevButtonTitle: PropTypes.string.isRequired,
  finishButtonTitle: PropTypes.string.isRequired,
  onFinish: PropTypes.func,
  onDismiss: PropTypes.func
}

export default Tour
