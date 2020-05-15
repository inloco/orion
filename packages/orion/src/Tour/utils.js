import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import _ from 'lodash'

import { StatusTag } from '..'

export const DEFAULT_PADDING = 0
export const DEFAULT_RADIUS = 4
const DEFAULT_POSITION = 'right'

export const BadgeDistance = {
  sm: 1,
  default: 16
}

export const BadgePosition = {
  CENTER: 'center',
  TOP_LEFT: 'top left',
  TOP_RIGHT: 'top right',
  BOTTOM_LEFT: 'bottom left',
  BOTTOM_RIGHT: 'bottom right'
}

export const getAnchorClassName = key => `orion-tour-step-${key}`

export function parseSteps(steps) {
  return steps.map(
    (
      {
        selector,
        anchor,
        title,
        titleTag,
        content,
        padding,
        badgePosition,
        badgeDistance,
        position,
        radius,
        actionBefore,
        actionAfter
      },
      i
    ) => {
      const parsedContent = (
        <>
          {title && (
            <header>
              <h1 className="orion-tour-title">{title}</h1>
              {titleTag && (
                <StatusTag
                  filled
                  type={StatusTag.Types.NEUTRAL}
                  bordered={false}>
                  {titleTag}
                </StatusTag>
              )}
            </header>
          )}
          {content}
        </>
      )
      if (anchor) {
        return {
          selector: `.${getAnchorClassName(i)}`,
          content: parsedContent,
          anchor,
          position,
          actionBefore,
          actionAfter
        }
      }

      return {
        selector,
        content: parsedContent,
        padding,
        badgePosition,
        badgeDistance,
        position: position || DEFAULT_POSITION,
        radius,
        actionBefore,
        actionAfter
      }
    }
  )
}

function calculateBadgePosition(node, padding, position, distance) {
  if (!node) return null

  const distancePixels = _.isNumber(distance)
    ? distance
    : _.get(BadgeDistance, distance, BadgeDistance.default)

  const { x, y, width, height } = node.getBoundingClientRect()

  let left, top

  switch (position) {
    case BadgePosition.CENTER:
      left = x + width / 2
      top = y + height / 2
      break
    case BadgePosition.TOP_LEFT:
      left = x - padding + 4 + distancePixels
      top = y - padding + 4 + distancePixels
      break
    case BadgePosition.BOTTOM_LEFT:
      left = x - padding + 4 + distancePixels
      top = y + height + padding - 4 - distancePixels
      break
    case BadgePosition.BOTTOM_RIGHT:
      left = x + width + padding - 4 - distancePixels
      top = y + height + padding - 4 - distancePixels
      break
    case BadgePosition.TOP_RIGHT:
    default:
      left = x + width + padding - 4 - distancePixels
      top = y - padding + 4 + distancePixels
      break
  }

  return { top, left }
}

export function useBadgePosition(steps, currentStep) {
  const [badgePosition, setbadgePosition] = useState(null)

  const updateBadgePosition = useCallback(() => {
    const selector = steps[currentStep]?.selector

    const element = document.querySelector(selector)
    if (!element) return null

    const { padding, badgePosition, badgeDistance, anchor } = steps[currentStep]

    const position = calculateBadgePosition(
      element,
      padding || DEFAULT_PADDING,
      anchor ? 'center' : badgePosition || BadgePosition.TOP_RIGHT,
      badgeDistance
    )
    setbadgePosition(position)
  }, [steps, currentStep])

  useEffect(() => {
    updateBadgePosition()
    return () => setbadgePosition(null)
  }, [updateBadgePosition])

  useEffect(() => {
    const debouncedUpdateBadgePosition = _.debounce(updateBadgePosition, 100)
    window.addEventListener('resize', debouncedUpdateBadgePosition, false)

    return () => {
      window.removeEventListener('resize', debouncedUpdateBadgePosition)
    }
  }, [steps, currentStep, updateBadgePosition])

  return badgePosition
}
