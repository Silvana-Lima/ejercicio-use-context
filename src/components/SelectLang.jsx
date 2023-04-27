import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { LangContext } from '../context/LangContext'

export const SelectLang = () => {
  const { handleLang, lang } = useContext(LangContext)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {lang === 'en' ? 'English' : 'Español'}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleLang('en')}>English</MenuItem>
        <MenuItem onClick={() => handleLang('es')}>Espanish</MenuItem>
      </MenuList>
    </Menu>
  )
}
