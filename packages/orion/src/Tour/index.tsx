import React, { useState, useEffect, useMemo, ReactElement } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Reactour from 'reactour'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import { Button, Portal } from '..'
import { TourProps } from './Tour.d'

import Anchor from './Anchor'
import Badge from './Badge'
import TourHelper from './TourHelper'
import TourModal from './TourModal'
import {
  getAnchorClassName,
  parseSteps,
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
}: TourProps): ReactElement {
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
      <Portal open={openTour}>
        <div className="orion-tour-anchors">
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
          <Badge position={badgePosition} />
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

export default Tour
