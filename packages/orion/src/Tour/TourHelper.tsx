import React, { ReactElement } from 'react'

import { TourHelperProps } from './Tour.d'

function TourHelper({ content, children }: TourHelperProps): ReactElement {
  return (
    <main className="orion-tour-helper">
      {content}
      {children}
    </main>
  )
}

export default TourHelper
