import React from 'react'
import PropTypes from 'prop-types'

function TourHelper({ content, children }) {
  return (
    <main className="orion-tour-helper">
      {content}
      {children}
    </main>
  )
}

TourHelper.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node
}

export default TourHelper
