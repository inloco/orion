import React from 'react'
import { render } from '@testing-library/react'

import WizardControls, { WizardButtons } from './'

it('should render the "Back" button except on the first step', () => {
  const { queryByText, rerender } = render(
    <WizardControls currentStepIndex={0} totalSteps={3} />
  )
  expect(queryByText('Back')).toBeNull()

  rerender(<WizardControls currentStepIndex={1} totalSteps={3} />)
  expect(queryByText('Back')).toBeTruthy()

  rerender(<WizardControls currentStepIndex={2} totalSteps={3} />)
  expect(queryByText('Back')).toBeTruthy()
})

it('should render the "Next" button except on the last step', () => {
  const { queryByText, rerender } = render(
    <WizardControls currentStepIndex={0} totalSteps={3} />
  )
  expect(queryByText('Next')).toBeTruthy()

  rerender(<WizardControls currentStepIndex={1} totalSteps={3} />)
  expect(queryByText('Next')).toBeTruthy()

  rerender(<WizardControls currentStepIndex={2} totalSteps={3} />)
  expect(queryByText('Next')).toBeNull()
})

it('should only render the "Finish" button on the last step', () => {
  const { queryByText, rerender } = render(
    <WizardControls currentStepIndex={0} totalSteps={3} />
  )
  expect(queryByText('Finish')).toBeNull()

  rerender(<WizardControls currentStepIndex={1} totalSteps={3} />)
  expect(queryByText('Finish')).toBeNull()

  rerender(<WizardControls currentStepIndex={2} totalSteps={3} />)
  expect(queryByText('Finish')).toBeTruthy()
})

it('should not render the "Save" button by default', () => {
  const { queryByText } = render(
    <WizardControls currentStepIndex={1} totalSteps={3} />
  )
  expect(queryByText('Save')).toBeNull()
})

describe('when the "Save" button is given', () => {
  it('should render the "Save" button except on the last step', () => {
    const buttons = {
      [WizardButtons.BACK]: 'Back',
      [WizardButtons.NEXT]: 'Next',
      [WizardButtons.FINISH]: 'Finish',
      [WizardButtons.SAVE]: 'Save'
    }
    const { queryByText, rerender } = render(
      <WizardControls buttons={buttons} currentStepIndex={0} totalSteps={3} />
    )

    expect(queryByText('Save')).toBeTruthy()

    rerender(
      <WizardControls buttons={buttons} currentStepIndex={1} totalSteps={3} />
    )
    expect(queryByText('Save')).toBeTruthy()

    rerender(
      <WizardControls buttons={buttons} currentStepIndex={2} totalSteps={3} />
    )
    expect(queryByText('Save')).toBeNull()
  })
})
