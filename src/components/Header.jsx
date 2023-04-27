import { Heading } from '@chakra-ui/react'
import { SelectLang } from './SelectLang'
import { useContext } from 'react'
import { LangContext } from '../context/LangContext'

export const Header = () => {
  const { t } = useContext(LangContext)

  return (
    <header>
      <Heading
        as={'h1'}
        textAlign={'center'}
        p={10}
        bg={'black'}
        color={'whiteAlpha.900'}
      >
        {t('h1')}
      </Heading>
      <SelectLang />
    </header>
  )
}
