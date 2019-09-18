import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const ReactIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <g data-name="Layer 1-2">
          <circle cx="12" cy="12" r="2.1" />
          <path d="M22.8,9.8a10.81,10.81,0,0,0-3-1.6L19,8a4.33,4.33,0,0,1,.1-.5c.6-2.9.2-5.1-1.1-5.9a2.75,2.75,0,0,0-2.5,0,9.47,9.47,0,0,0-2.9,1.8L12,4l-.4-.4C9.4,1.6,7.2.9,6,1.6A3,3,0,0,0,4.8,3.7a10.3,10.3,0,0,0,.1,3.5c0,.2.1.5.1.8a6.89,6.89,0,0,0-.8.3C1.6,9.2,0,10.5,0,12a3,3,0,0,0,1.2,2.2,11.67,11.67,0,0,0,3.1,1.7l.7.2c-.1.3-.1.6-.2.9-.5,2.7-.1,4.8,1.1,5.5a2.66,2.66,0,0,0,1.2.3,3.53,3.53,0,0,0,1.4-.3,9.53,9.53,0,0,0,3-1.9l.5-.5.6.6a7.21,7.21,0,0,0,4.2,2,2,2,0,0,0,1.1-.3,3.16,3.16,0,0,0,1.3-2.2,10.89,10.89,0,0,0-.1-3.6c0-.2-.1-.4-.1-.6l.5-.1C22.3,15,24,13.5,24,12A3,3,0,0,0,22.8,9.8ZM15.9,2.5a2.22,2.22,0,0,1,1.6-.1c.7.4,1.2,2.1.6,4.8l-.1.5c-1.1-.2-2.2-.4-3.2-.5a24.33,24.33,0,0,0-2-2.5l.6-.5A6.52,6.52,0,0,1,15.9,2.5Zm-.5,11.4a18.58,18.58,0,0,0-1.1,1.9c-.7,0-1.5.1-2.2.1a16.2,16.2,0,0,1-2.2-.1c-.4-.6-.8-1.2-1.2-1.9S8,12.6,7.7,12c.3-.6.7-1.3,1-1.9h0A11.78,11.78,0,0,1,9.8,8.2c.7,0,1.5-.1,2.2-.1a16.2,16.2,0,0,1,2.2.1c.4.6.8,1.2,1.2,1.9s.7,1.3,1,1.9C16.1,12.6,15.7,13.3,15.4,13.9Zm1.5-.7a18,18,0,0,1,.8,2.1,17,17,0,0,1-2.2.4,7.46,7.46,0,0,0,.7-1.2A8.26,8.26,0,0,0,16.9,13.2ZM12,18.6c-.5-.6-1-1.1-1.5-1.7h2.9C13,17.4,12.5,18,12,18.6ZM8.5,15.7a17,17,0,0,1-2.2-.4,18,18,0,0,1,.8-2.1,7.46,7.46,0,0,0,.7,1.2C8,14.8,8.3,15.3,8.5,15.7ZM7.8,9.6c-.2.4-.5.8-.7,1.2a18,18,0,0,1-.8-2.1l2.2-.3A6.35,6.35,0,0,0,7.8,9.6ZM12,5.4a22,22,0,0,1,1.4,1.8H10.6C11.1,6.5,11.5,6,12,5.4Zm4.2,4.2c-.2-.4-.5-.8-.7-1.2a14.35,14.35,0,0,1,2.2.4,18,18,0,0,1-.8,2.1ZM5.9,7a8,8,0,0,1-.1-3.1,1.75,1.75,0,0,1,.7-1.4c.7-.4,2.4,0,4.4,1.9l.4.3a24.33,24.33,0,0,0-2,2.5c-1.1.1-2.2.3-3.3.5A1.7,1.7,0,0,0,5.9,7ZM4.7,14.9C2.2,14,1,12.8,1,12s1.1-1.9,3.5-2.7A2.61,2.61,0,0,1,5.3,9a18.77,18.77,0,0,0,1.2,3,16.59,16.59,0,0,0-1.2,3.1Zm2.5,6.7a1.27,1.27,0,0,1-.6-.1c-.7-.4-1.1-1.9-.6-4.4a2.35,2.35,0,0,1,.2-.8,30.62,30.62,0,0,0,3.2.5,16.38,16.38,0,0,0,2.1,2.5l-.5.4A6.58,6.58,0,0,1,7.2,21.6Zm11-4.8c.5,2.6,0,4.3-.7,4.7s-2.2,0-4.1-1.6l-.6-.6a15,15,0,0,0,1.9-2.5,30.62,30.62,0,0,0,3.2-.5,1.33,1.33,0,0,1,.3.5Zm1-1.9-.4.1a15.66,15.66,0,0,0-1.2-3,18.77,18.77,0,0,0,1.2-3l.7.2a8.67,8.67,0,0,1,2.7,1.4A2.19,2.19,0,0,1,23,12C23,12.8,21.8,14,19.2,14.9Z" />
        </g>
      </g>
    </g>
  </svg>
)

ReactIcon.propTypes = {
  className: PropTypes.string
}

export default ReactIcon
