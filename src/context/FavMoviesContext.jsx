import { createContext, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage'

export const FavMoviesContext = createContext()

export const FavMoviesProvider = ({ children }) => {
  const initialFavorites = getLocalStorage('favorites') || []
  const [favorites, setFavorites] = useState(initialFavorites)
  const [error, setError] = useState(false)

  const addFavorites = (movie) => {
    const newMovieFav = favorites.some((favorite) => favorite.id === movie.id)
    setError(false)
    if (!newMovieFav) {
      setFavorites([...favorites, movie])
      setLocalStorage('favorites', [...favorites, movie])
    } else {
      setError(true)
    }
  }

  const removeFavorites = (movie) => {
    const newFavorites = favorites.filter(
      (favorite) => favorite.id !== movie.id
    )
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
