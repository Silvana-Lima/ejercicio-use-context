import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { FavMoviesProvider } from './context/favMoviesContext.jsx'
import { UserValidationProvider } from './context/UserValidationContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <UserValidationProvider>
        <FavMoviesProvider>
          <App />
        </FavMoviesProvider>
      </UserValidationProvider>
    </ChakraProvider>
  </React.StrictMode>
)
