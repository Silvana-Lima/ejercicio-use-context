import { createContext, useState } from 'react'

export const UserValidationContext = createContext()

export const UserValidationProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState(null)

  const login = (data) => {
    setUserLogin(data)
  }

  const logout = () => {
    setUserLogin(null)
  }

  return (
    <UserValidationContext.Provider value={{ userLogin, login, logout }}>
      {children}
    </UserValidationContext.Provider>
  )
}
