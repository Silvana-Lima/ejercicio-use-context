import { Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { UserValidationContext } from '../context/UserValidationContext'

export const ButtonLogout = () => {
  const { logout } = useContext(UserValidationContext)
  return (
    <Button onClick={logout} colorScheme="blue" variant="outline">
      Logout
    </Button>
  )
}
