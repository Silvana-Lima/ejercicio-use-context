import { useContext } from 'react'
import { Header } from './components/Header'
import { Movies } from './components/Movies'
import { ShowFavMovies } from './components/ShowFavMovies'
import { FavMoviesContext } from './context/favMoviesContext'
import { ErrorMovieDuplicate } from './components/ErrorMovieDuplicate'
import { FormLogin } from './components/FormLogin'
import { UserValidationContext } from './context/UserValidationContext'
import { ButtonLogout } from './components/ButtonLogout'
import { HStack, Stack, VStack } from '@chakra-ui/react'

function App() {
  const { error } = useContext(FavMoviesContext)
  const { userLogin } = useContext(UserValidationContext)
  return (
    <>
      <Header />
      {!userLogin && <FormLogin />}
      {userLogin && (
        <Stack>
          <HStack p={5} bg={'blackAlpha.900'}>
            <ShowFavMovies />
            <ButtonLogout />
          </HStack>
          <VStack>
            <Movies />
            {error && <ErrorMovieDuplicate />}
          </VStack>
        </Stack>
      )}
    </>
  )
}

export default App
