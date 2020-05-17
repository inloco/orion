import { ReactElement, ReactChildren } from 'react'

export type TourProps = {
  className?: string
  steps: Array<StepProps>
  welcomeModal: ModalProps
  dismissButtonTitle: string
  nextButtonTitle: string
  prevButtonTitle: string
  finishButtonTitle: string
  onFinish?: () => void
  onDismiss?: () => void
}

export type StepProps = {
  selector?: string
  anchor: Anchor
  title?: string
  content?: ReactElement
  titleTag?: string
  padding?: number
  badgePosition?:
    | 'center'
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right'
  badgeDistance?: number | 'sm' | 'default'
  position?: 'top' | 'right' | 'bottom' | 'left'
  radius?: number
  actionBefore?: () => void
  actionAfter?: () => void
}

export type AnchoredStepProps = {
  selector: string
  content?: ReactElement
  anchor: Anchor
  position?: 'top' | 'right' | 'bottom' | 'left'
  actionBefore?: () => void
  actionAfter?: () => void
}

export type SelectorStepProps = {
  selector?: string
  content?: ReactElement
  padding?: number
  badgePosition?:
    | 'center'
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right'
  badgeDistance?: number | 'sm' | 'default'
  position: 'top' | 'right' | 'bottom' | 'left'
  radius?: number
  actionBefore?: () => void
  actionAfter?: () => void
}

export type ModalProps = {
  content?: ReactElement
  buttonTitle: string
}

export type AnchorProps = {
  className: string
  position: Anchor
}

export type BadgeProps = {
  position?: Anchor
}

export type TourHelperProps = {
  children: ReactChildren
  content: ReactElement
}

export type Anchor = {
  top: number
  left: number
}
