import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import { text } from '@storybook/addon-knobs'

import { Card, Icon } from '../'

export default {
  title: 'Icon'
}

export const basic = () => (
  <Icon color={text('Color')} name={text('icon', 'cloud')} />
)

export const customIcons = () => {
  const IconCard = ({ name, inverted }) => {
    const classNames = cx('flex flex-col items-center m-8 ml-0 p-4 w-48', {
      'bg-gray-800': inverted
    })
    return (
      <Card className={classNames}>
        <Icon name={name} />
        <div className="text-sm">{name}</div>
      </Card>
    )
  }
  IconCard.propTypes = {
    name: PropTypes.string,
    inverted: PropTypes.bool
  }

  return (
    <React.Fragment>
      <div>
        Icon accepts all{' '}
        <a href="https://material.io/resources/icons" target="blank">
          material icons
        </a>
        , plus the ones listed here:
      </div>
      <div className="flex">
        <IconCard name="ios" />
        <IconCard name="react" />
        <IconCard name="loading" />
        <IconCard name="loading" inverted />
      </div>
    </React.Fragment>
  )
}

export const iconAsElement = () => {
  const IconSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24">
      <g id="Layer_2">
        <g id="Layer_1-2">
          <path
            d="M12,4.91l-8.32,7.5h2.5v6.68H17.82V12.41h2.5Zm-.83,11L9,13.71l.7-.71,1.49,1.49,3.08-3.09.71.71Z"
            fill="#9e9fa0"
          />
          <rect width="24" height="24" fill="none" />
        </g>
      </g>
    </svg>
  )
  return <Icon as={IconSVG} />
}
