import React, {createContext, useState, useContext} from 'react'
import PropTypes from 'prop-types'

const ThemeValue = createContext()
const ThemeUpdater = createContext()

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light')

  const handleSetTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeValue.Provider value={theme}>
      <ThemeUpdater.Provider value={handleSetTheme}>
        {children}
      </ThemeUpdater.Provider>
    </ThemeValue.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

const getThemeValue = () => {
  const value = useContext(ThemeValue)

  if (!value) {
    throw new Error('you not use context provider')
  }

  return value
}

const getThemeUpdater = () => {
  const updater = useContext(ThemeUpdater)

  if (!updater) {
    throw new Error('you not use context provider')
  }

  return updater
}

export {ThemeProvider, getThemeValue, getThemeUpdater}
