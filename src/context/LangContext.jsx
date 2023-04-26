import { createContext, useState } from 'react'

export const LangContext = createContext()

const languajes = {
  es: {
    h1: 'Mis películas favoritas',
    login: 'Iniciar sesión',
    logout: 'Cerrar sesión',
    h2: 'Elige tus películas favoritas',
    addfavorites: 'Agregar',
    h3: 'Películas favoritas',
    clear: 'Limpiar',
    close: 'cerrar',
  },
  en: {
    h1: 'My favorites movies',
    login: 'Login',
    logout: 'Logout',
    h2: 'Choose your favorite movies',
    addfavorites: 'Add',
    h3: 'Favorites Movies',
    clear: 'Clear',
    close: 'Close',
  },
}

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState('en')

  const handleLang = (languaje) => {
    setLang(languaje)
  }

  const t = (text) => {
    const chooseLang = languajes[lang]

    return chooseLang(text) || text
  }
  return (
    <LangContext.Provider value={{ handleLang, t, lang }}>
      {children}
    </LangContext.Provider>
  )
}
