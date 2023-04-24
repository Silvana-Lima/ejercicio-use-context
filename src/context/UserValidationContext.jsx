import { createContext, useState } from 'react'

export const UserValidationContext = createContext()

export const UserValidationProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState(false)

  const handleUserLogin = () => {
    setUserLogin(true)
    console.log('hay usuario')
  }

  const handleUserLogout = () => {
    setUserLogin(false)
    console.log('usuario cerro sesion')
  }

  return (
    <UserValidationContext.Provider
      value={{ userLogin, handleUserLogin, handleUserLogout }}
    >
      {children}
    </UserValidationContext.Provider>
  )
}
