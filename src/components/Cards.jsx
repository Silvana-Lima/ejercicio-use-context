import { StarIcon } from '@chakra-ui/icons'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
} from '@chakra-ui/react'

export const Cards = ({ movie, functionOnClick, text }) => {
  const { id, img, name } = movie

  return (
    <Card maxW="sm" key={id}>
      <CardBody>
        <Image
          src={img}
          alt={`Image of de movie: ${name}`}
          borderRadius="lg"
          w={'200'}
          h={'300'}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
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
          id={id}
          onClick={() => functionOnClick(id)}
        >
          {text}
        </Button>
      </CardFooter>
    </Card>
  )
}