import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  DrawerFooter,
  Stack,
  Box,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { FavMoviesContext } from '../context/favMoviesContext'
import { Cards } from './Cards'

export const ShowFavMovies = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { favorites, removeFavorites, emptyFavorites } =
    useContext(FavMoviesContext)

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen} width={'200px'}>
        See Favorites
      </Button>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size={'xs'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Favorites Movies</DrawerHeader>
          <DrawerBody>
            {!favorites.length && <p>You haven't added favorite movies yet</p>}
            <Stack gap={5}>
              {favorites &&
                favorites.map((favorite) => (
                  <Cards
                    key={favorite.id}
                    movie={favorite}
                    text={'Remove favorite'}
                    functionOnClick={removeFavorites}
                  />
                ))}
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              close
            </Button>
            <Button colorScheme="red" onClick={emptyFavorites}>
              Empty favorites
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
