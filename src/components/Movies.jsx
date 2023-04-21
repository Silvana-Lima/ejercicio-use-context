import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { movies } from '../../utils/movies'
import { useContext } from 'react'
import { FavMoviesContext } from '../context/favMoviesContext'

export const Movies = () => {
  const { handleFavorites } = useContext(FavMoviesContext)

  return (
    <HStack justifyContent={'center'}>
      {movies.map((movie) => (
        <Card maxW="sm" key={movie.id}>
          <CardBody>
            <Image
              src={movie.img}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              w={'200'}
              h={'300'}
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{movie.name}</Heading>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button
              leftIcon={<StarIcon />}
              colorScheme="teal"
              variant="solid"
              bg={'blackAlpha.800'}
              color={'whiteAlpha.900'}
              id={movie.id}
              onClick={() => handleFavorites(movie.id)}
            >
              Add favorite
            </Button>
          </CardFooter>
        </Card>
      ))}
    </HStack>
  )
}
