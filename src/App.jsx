import { useContext } from 'react'
import { Header } from './components/Header'
import { Movies } from './components/Movies'
import { ShowFavMovies } from './components/ShowFavMovies'
import { FavMoviesContext } from './context/favMoviesContext'
import { ErrorMovieDuplicate } from './components/ErrorMovieDuplicate'

function App() {
  const { error } = useContext(FavMoviesContext)
  return (
    <>
      <Header />
      <Movies />
      {error && <ErrorMovieDuplicate />}
      <ShowFavMovies />
    </>
  )
}

export default App
