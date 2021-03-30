import React, { createContext, useContext, useState, useEffect } from 'react'

import Alert, { AlertProps } from './Alert'

const AlertContext: React.Context<ContextValue> = createContext(
  {} as ContextValue
)

const AlertContextProvider: React.FC = props => {
  const [alertProps, setAlertProps] = useState<AlertProps | null>(null)

  return (
    <AlertContext.Provider value={{ alertProps, setAlertProps }} {...props} />
  )
}

const LayoutAlert: React.FC<AlertProps> = props => {
  const { setAlertProps } = useContext(AlertContext)

  useEffect(() => {
    setAlertProps(props)

    return () => setAlertProps(null)
  }, [props])
  return null
}

function useAlert(): AlertProps | null {
  const context = useContext(AlertContext)

  return context?.alertProps
}

interface ContextValue {
  alertProps: AlertProps | null
  setAlertProps: React.Dispatch<React.SetStateAction<AlertProps | null>>
}

export default LayoutAlert
export { AlertContextProvider, useAlert, Alert }
