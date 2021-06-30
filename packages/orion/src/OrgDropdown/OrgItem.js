import React from 'react'
import PropTypes from 'prop-types'
import { Image as SemanticImage } from '@inloco/semantic-ui-react'

import Icon from '../Icon'

const OrgItem = ({ image, text, label }) => (
  <div className="orgdropdown-content">
    <div className="orgdropdown-image">
      {image ? <SemanticImage {...image} /> : <Icon name="business" />}
    </div>
    <div className="orgdropdown-text">
      <div>{text}</div>
      {label && <label>{label}</label>}
    </div>
  </div>
)

OrgItem.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.any,
  label: PropTypes.string
}

export default OrgItem
