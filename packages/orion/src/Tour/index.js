import React, { useState, useEffect } from 'react'
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
  dismissButtonContent,
  nextButtonContent,
  prevButtonContent,
  finishButtonContent,
  onFinish,
  onDismiss
}) {
  const [tourSteps, setTourSteps] = useState(() => parseSteps(steps))
  const [currentStep, setCurrentStep] = useState(0)
  const [openTour, setOpenTour] = useState(!welcomeModal)
  const [openModal, setOpenModal] = useState(!!welcomeModal)
  const badgePosition = useBadgePosition(tourSteps, currentStep)

  useEffect(() => {
    disableBodyScroll()
    return () => enableBodyScroll()
  }, [])

  useEffect(() => {
    setTourSteps(parseSteps(steps))
  }, [steps, setTourSteps])

  function handleNextStep() {
    const actionBefore = tourSteps[currentStep + 1]?.actionBefore
    const actionAfter = tourSteps[currentStep]?.actionAfter
    actionAfter && actionAfter()
    actionBefore && actionBefore()

    currentStep + 1 < steps.length && setCurrentStep(step => step + 1)
  }

  function handlePreviousStep() {
    const actionBefore = tourSteps[currentStep - 1]?.actionBefore
    const actionAfter = tourSteps[currentStep]?.actionAfter
    actionAfter && actionAfter()
    actionBefore && actionBefore()

    currentStep > 0 && setCurrentStep(step => step - 1)
  }

  return (
    <>
      <TourModal
        open={openModal}
        onContinue={() => {
          setOpenModal(false)
          setOpenTour(true)
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
                onDismiss && onDismiss()
              }}
              content={dismissButtonContent}
            />
            {currentStep > 0 && (
              <Button
                subtle
                onClick={handlePreviousStep}
                content={prevButtonContent}
              />
            )}
            {currentStep + 1 >= steps.length ? (
              <Button
                subtle
                primary
                onClick={() => {
                  setOpenTour(false)
                  onFinish && onFinish()
                }}
                content={finishButtonContent}
              />
            ) : (
              <Button
                subtle
                primary
                onClick={handleNextStep}
                content={nextButtonContent}
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
    buttonContent: PropTypes.string
  }),
  dismissButtonContent: PropTypes.string.isRequired,
  nextButtonContent: PropTypes.string.isRequired,
  prevButtonContent: PropTypes.string.isRequired,
  finishButtonContent: PropTypes.string.isRequired,
  onFinish: PropTypes.func,
  onDismiss: PropTypes.func
}

export default Tour
