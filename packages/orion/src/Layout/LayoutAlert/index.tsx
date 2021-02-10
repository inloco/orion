import React, { createContext, useContext, useState, useEffect } from 'react'

import Alert from './Alert'

const AlertContext: React.Context<ContextValue> = createContext(
  {} as ContextValue
)

const AlertContextProvider: React.FC = props => {
  const [message, setMessage] = useState<string | null>(null)

  return <AlertContext.Provider value={{ message, setMessage }} {...props} />
}

const LayoutAlert: React.FC<LayoutAlertProps> = ({ message }) => {
  const { setMessage } = useContext(AlertContext)

  useEffect(() => {
    setMessage(message)

    return () => setMessage(null)
  }, [message])
  return null
}

function useAlert(): string | null {
  const { message } = useContext(AlertContext)

  return message
}

interface ContextValue {
  message: string | null
  setMessage: React.Dispatch<React.SetStateAction<string | null>>
}

interface LayoutAlertProps {
  message: string
}

export default LayoutAlert
export { AlertContextProvider, useAlert, Alert }
