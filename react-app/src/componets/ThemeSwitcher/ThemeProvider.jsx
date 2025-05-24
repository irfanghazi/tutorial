import React, { useContext, createContext, useState } from 'react'

// create context
const ThemeContext = createContext()
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')

    // toggle theme function
    const toggleTheme = () => {
        setTheme((preTheme) => preTheme == 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider

export const UseTheme = () => useContext(ThemeContext)