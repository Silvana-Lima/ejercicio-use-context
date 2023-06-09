import { createContext, useState } from 'react'

export const LangContext = createContext()

const languajes = {
  es: {
    h1: 'Mis películas favoritas',
    login: 'Iniciar sesión',
    logout: 'Cerrar sesión',
    email: 'Casilla de correo',
    password: 'Contraseña',
    seeFavorites: 'Ver Favoritos',
    noFavorites: 'Todavía no agregaste favoritos',
    h2: 'Elige tus películas favoritas',
    alt: 'Imagen de película',
    addfavorites: 'Agregar',
    h3: 'Películas favoritas',
    clear: 'Limpiar',
    close: 'cerrar',
    languajes: 'Idioma',
  },
  en: {
    h1: 'My favorites movies',
    login: 'Login',
    logout: 'Logout',
    email: 'Email',
    password: 'Password',
    seeFavorites: 'See favorites',
    noFavorites: 'No favorites',
    h2: 'Choose your favorite movies',
    alt: 'Image of movie',
    addfavorites: 'Add',
    h3: 'Favorites Movies',
    clear: 'Clear',
    close: 'Close',
    languajes: 'Languajes',
  },
}

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState('en')

  const handleLang = (languaje) => {
    setLang(languaje)
  }

  const t = (text) => {
    const chooseLang = languajes[lang]

    return chooseLang[text] || text
  }
  return (
    <LangContext.Provider value={{ handleLang, t, lang }}>
      {children}
    </LangContext.Provider>
  )
}
