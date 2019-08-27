import _ from 'lodash'
import React from 'react'
import { Card as SemanticCard } from '@inloco/semantic-ui-react'

const Card = ({ ...otherProps }) => {
  return <SemanticCard {...otherProps} />
}

Card.propTypes = {}

Card.Content = SemanticCard.Content
Card.Description = SemanticCard.Description
Card.Group = SemanticCard.Group
Card.Header = SemanticCard.Header
Card.Meta = SemanticCard.Meta

export default Card
