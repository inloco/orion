export type StepObject = {
  text: string
  description?: string
}

export type StepsNavProps = {
  steps: Array<string | StepObject>
  currentStep: number
  className?: string
}
