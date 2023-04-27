import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { FavMoviesProvider } from './context/favMoviesContext.jsx'
import { UserValidationProvider } from './context/UserValidationContext.jsx'
import { LangContextProvider } from './context/LangContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <LangContextProvider>
        <UserValidationProvider>
          <FavMoviesProvider>
            <App />
          </FavMoviesProvider>
        </UserValidationProvider>
      </LangContextProvider>
    </ChakraProvider>
  </React.StrictMode>
)
