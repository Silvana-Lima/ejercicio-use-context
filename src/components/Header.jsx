import { Heading } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Heading
      as={'h1'}
      textAlign={'center'}
      p={10}
      bg={'blackAlpha.800'}
      color={'whiteAlpha.900'}
    >
      My favorites movies
    </Heading>
  )
}
