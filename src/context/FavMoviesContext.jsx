import { createContext, useState } from 'react'
import { movies } from '../../utils/movies'
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage'

export const FavMoviesContext = createContext()

export const FavMoviesProvider = ({ children }) => {
  const initialFavorites = getLocalStorage('favorites') || []
  const [favorites, setFavorites] = useState(initialFavorites)
  const [error, setError] = useState(false)

  const addFavorites = (id) => {
    const newMovie = movies.find((movie) => movie.id === id)
    setError(false)
    if (!favorites.includes(newMovie)) {
      const newFavorite = [...favorites, newMovie]
      setFavorites(newFavorite)
      setLocalStorage('favorites', newFavorite)
    } else {
      setError(true)
    }
  }

  const removeFavorites = (id) => {
    const newFavorites = favorites.filter((favorite) => favorite.id !== id)
    setFavorites(newFavorites)
    setLocalStorage('favorites', newFavorites)
  }

  const emptyFavorites = () => {
    setFavorites([])
    setLocalStorage('favorites', [])
  }

  return (
    <FavMoviesContext.Provider
      value={{
        addFavorites,
        favorites,
        error,
        removeFavorites,
        emptyFavorites,
      }}
    >
      {children}
    </FavMoviesContext.Provider>
  )
}
