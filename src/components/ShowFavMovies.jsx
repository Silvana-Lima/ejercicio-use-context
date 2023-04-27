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
} from '@chakra-ui/react'
import { useContext } from 'react'
import { FavMoviesContext } from '../context/FavMoviesContext'
import { Cards } from './Cards'
import { LangContext } from '../context/LangContext'

export const ShowFavMovies = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { favorites, removeFavorites, emptyFavorites } =
    useContext(FavMoviesContext)
  const { t } = useContext(LangContext)

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen} width={'200px'}>
        {t('seeFavorites')}
      </Button>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size={'xs'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">{t('h3')}</DrawerHeader>
          <DrawerBody>
            {!favorites.length && <p>{t('noFavorites')}</p>}
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
              {t('close')}
            </Button>
            <Button colorScheme="red" onClick={emptyFavorites}>
              {t('clear')}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
