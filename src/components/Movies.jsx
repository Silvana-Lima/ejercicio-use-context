import { HStack, Heading, VStack } from '@chakra-ui/react'
import { movies } from '../../utils/movies'
import { useContext } from 'react'
import { FavMoviesContext } from '../context/favMoviesContext'
import { Cards } from './Cards'

export const Movies = () => {
  const { addFavorites } = useContext(FavMoviesContext)

  return (
    <VStack p={5}>
      <Heading as={'h2'} fontSize={'2xl'}>
        Choose your favorite movies
      </Heading>
      <HStack justifyContent={'center'} p={5} flexWrap={'wrap'} gap={5}>
        {movies.map((movie) => (
          <Cards
            key={movie.id}
            movie={movie}
            functionOnClick={addFavorites}
            text={'Add favorite'}
          />
        ))}
      </HStack>
    </VStack>
  )
}
