import cx from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Card as SemanticCard } from '@inloco/semantic-ui-react'

const Card = ({
  children,
  className,
  selectable,
  selected,
  withCheckbox,
  ...otherProps
}) => {
  const classes = cx(className, {
    selectable,
    selected: selectable && selected
  })

  return (
    <SemanticCard className={classes} {...otherProps}>
      {selectable && withCheckbox && <Checkbox checked={selected} readOnly />}
      {children}
    </SemanticCard>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  selectable: PropTypes.bool,
  selected: PropTypes.bool,
  withCheckbox: PropTypes.bool
}

Card.Content = SemanticCard.Content
Card.Description = SemanticCard.Description
Card.Group = SemanticCard.Group
Card.Header = SemanticCard.Header
Card.Meta = SemanticCard.Meta

export default Card
