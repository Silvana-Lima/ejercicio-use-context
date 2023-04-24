import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserValidationContext } from '../context/UserValidationContext'

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm()

  const { handleUserLogin } = useContext(UserValidationContext)

  return (
    <VStack pt={'150px'}>
      <form onSubmit={handleSubmit(handleUserLogin)}>
        <SimpleGrid gap={5}>
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              borderColor={'black'}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'This email is invalid',
                },
              })}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel htmlFor="email">Password</FormLabel>
            <Input
              type="password"
              id="password"
              borderColor={'black'}
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must contain at least 6 characters',
                },
              })}
            />
            <FormErrorMessage>{errors.password?.message} </FormErrorMessage>
          </FormControl>
          <Button type="submit" colorScheme="blue" isDisabled={!isDirty}>
            Login
          </Button>
        </SimpleGrid>
      </form>
    </VStack>
  )
}
