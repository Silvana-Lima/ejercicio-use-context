import { HStack } from '@chakra-ui/react'
import { movies } from '../../utils/movies'
import { useContext } from 'react'
import { FavMoviesContext } from '../context/favMoviesContext'
import { Cards } from './Cards'

export const Movies = () => {
  const { addFavorites } = useContext(FavMoviesContext)

  return (
    <HStack justifyContent={'center'}>
      {movies.map((movie) => (
        <Cards
          key={movie.id}
          movie={movie}
          functionOnClick={addFavorites}
          text={'Add favorite'}
        />
      ))}
    </HStack>
  )
}
