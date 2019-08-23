import React from 'react'
import { render } from '@testing-library/react'

import StepsNav from './index'

const steps = ['step 1', 'step 2', 'step 3', 'step 4']

const textForIndex = index => (index + 1).toString()

describe('when rendering a StepsNav', () => {
  it('should correctly render the steps', () => {
    const currentStep = 1
    const { queryByText, queryAllByText } = render(
      <StepsNav steps={steps} currentStep={currentStep} />
    )

    steps.forEach(name => {
      expect(queryByText(name)).toBeTruthy()
    })

    steps.forEach((_, index) => {
      if (index >= currentStep) {
        expect(queryByText(textForIndex(index))).toBeTruthy()
      } else {
        expect(queryByText(textForIndex(index))).toBeFalsy()
      }
    })

    expect(queryAllByText('done').length).toBe(1)
  })

  describe('when the current step is 0', () => {
    it('should not render done icons ', () => {
      const { queryAllByText } = render(
        <StepsNav steps={steps} currentStep={0} />
      )
      expect(queryAllByText('done').length).toBe(0)
    })
  })

  describe('when the steps are done', () => {
    it('should not render the step indexes ', () => {
      const { queryByText, queryAllByText } = render(
        <StepsNav steps={steps} currentStep={steps.length} />
      )
      steps.forEach((_, index) => {
        expect(queryByText(textForIndex(index))).toBeFalsy()
      })
      expect(queryAllByText('done').length).toBe(steps.length)
    })
  })
})
