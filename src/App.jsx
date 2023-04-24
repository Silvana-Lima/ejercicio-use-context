import { useContext } from 'react'
import { Header } from './components/Header'
import { Movies } from './components/Movies'
import { ShowFavMovies } from './components/ShowFavMovies'
import { FavMoviesContext } from './context/favMoviesContext'
import { ErrorMovieDuplicate } from './components/ErrorMovieDuplicate'
import { FormLogin } from './components/FormLogin'
import { UserValidationContext } from './context/UserValidationContext'

function App() {
  const { error } = useContext(FavMoviesContext)
  const { userLogin } = useContext(UserValidationContext)
  return (
    <>
      <Header />
      <FormLogin />
      {userLogin && <ShowFavMovies />}
      <Movies />
      {error && <ErrorMovieDuplicate />}
    </>
  )
}

export default App
