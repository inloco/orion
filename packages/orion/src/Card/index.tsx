import cx from 'classnames'
import React from 'react'
import { Checkbox, Card as SemanticCard } from '@inloco/semantic-ui-react'

const Card: CardComponent<CardProps> = ({
  children,
  className,
  disabled,
  readOnly,
  selectable,
  selected,
  withCheckbox,
  ...otherProps
}) => {
  const classes = cx(className, {
    disabled,
    'read-only': readOnly,
    selectable,
    selected: selectable && selected
  })

  return (
    <SemanticCard className={classes} {...otherProps}>
      {selectable && withCheckbox && (
        <Checkbox checked={selected} disabled={disabled} readOnly />
      )}
      {children}
    </SemanticCard>
  )
}

type CardProps = {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  readOnly?: boolean
  selectable?: boolean
  selected?: boolean
  withCheckbox?: boolean
}

interface CardComponent<T> extends React.FC<T> {
  Content?: React.StatelessComponent
  Description?: React.StatelessComponent
  Group?: React.StatelessComponent
  Header?: React.StatelessComponent
  Meta?: React.StatelessComponent
}

Card.Content = SemanticCard.Content
Card.Description = SemanticCard.Description
Card.Group = SemanticCard.Group
Card.Header = SemanticCard.Header
Card.Meta = SemanticCard.Meta

export default Card
