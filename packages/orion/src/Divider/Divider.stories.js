import React from 'react'

import { Divider } from '../'

const storyMetadata = {
  title: 'Divider'
}

export default storyMetadata

export const horizontal = () => {
  return (
    <div className="text-center w-384">
      Text at top
      <Divider />
      Text at bottom
    </div>
  )
}

export const vertical = () => {
  return (
    <div className="flex text-center w-384">
      Left Text
      <Divider vertical className="mx-8" />
      Right Text
    </div>
  )
}
