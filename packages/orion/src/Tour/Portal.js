import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

function Portal({ children }) {
  const ref = useRef(null)

  if (ref.current === null) {
    ref.current = document.createElement('div')
    ref.current.setAttribute('id', 'orion-tour-portal')
  }

  useEffect(() => {
    document.body.appendChild(ref.current)
    return () => {
      document.body.removeChild(ref.current)
    }
  }, [ref])

  return createPortal(children, ref.current)
}

export default Portal
