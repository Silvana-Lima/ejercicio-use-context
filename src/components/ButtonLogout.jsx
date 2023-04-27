import { Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { UserValidationContext } from '../context/UserValidationContext'
import { LangContext } from '../context/LangContext'

export const ButtonLogout = () => {
  const { logout } = useContext(UserValidationContext)
  const { t } = useContext(LangContext)
  return (
    <Button onClick={logout} colorScheme="blue" variant="outline">
      {t('logout')}
    </Button>
  )
}
