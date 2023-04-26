import { Heading } from '@chakra-ui/react'
import { SelectLang } from './SelectLang'

export const Header = () => {
  return (
    <header>
      <Heading
        as={'h1'}
        textAlign={'center'}
        p={10}
        bg={'black'}
        color={'whiteAlpha.900'}
      >
        My favorites movies
      </Heading>
      <SelectLang />
    </header>
  )
}
