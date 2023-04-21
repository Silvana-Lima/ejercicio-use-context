import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  HStack,
  DrawerFooter,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { FavMoviesContext } from '../context/favMoviesContext'
import { Cards } from './Cards'

export const ShowFavMovies = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { favorites, removeFavorites } = useContext(FavMoviesContext)

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        See Favorites
      </Button>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size={'lg'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Favorites Movies</DrawerHeader>
          <DrawerBody>
            <HStack h={'500px'}>
              {favorites &&
                favorites.map((favorite) => (
                  <Cards
                    key={favorite.id}
                    movie={favorite}
                    text={'Remove favorite'}
                    functionOnClick={removeFavorites}
                  />
                ))}
            </HStack>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              close
            </Button>
            <Button colorScheme="red">Empty favorites</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
