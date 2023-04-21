import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { FavMoviesProvider } from './context/favMoviesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <FavMoviesProvider>
        <App />
      </FavMoviesProvider>
    </ChakraProvider>
  </React.StrictMode>
)
