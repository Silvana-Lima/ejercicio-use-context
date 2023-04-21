import { createContext, useState } from 'react'
import { movies } from '../../utils/movies'
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage'

export const FavMoviesContext = createContext()

export const FavMoviesProvider = ({ children }) => {
  const initialFavorites = getLocalStorage('favorites') || []
  const [favorites, setFavorites] = useState(initialFavorites)
  const [error, setError] = useState(false)

  const handleFavorites = (id) => {
    const newMovie = movies.find((movie) => movie.id === id)

    if (favorites.includes(newMovie)) {
      setError(true)
    } else {
      const newFavorite = [...favorites, newMovie]
      setError(false)
      setFavorites(newFavorite)
      setLocalStorage('favorites', newFavorite)
    }
  }

  return (
    <FavMoviesContext.Provider value={{ handleFavorites, favorites, error }}>
      {children}
    </FavMoviesContext.Provider>
  )
}
