import { Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { UserValidationContext } from '../context/UserValidationContext'

export const ButtonLogout = () => {
  const { handleUserLogout } = useContext(UserValidationContext)
  return <Button onClick={handleUserLogout}>Logout</Button>
}
