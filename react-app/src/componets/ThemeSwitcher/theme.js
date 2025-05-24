import React from 'react'
import { UseTheme } from './ThemeProvider'
const Theme = () => {
    const { theme, toggleTheme } = UseTheme()
    console.log("object-------------", UseTheme());
    return (
        <div>
            <div
                style={{
                    backgroundColor: theme === 'light' ? 'white' : 'black',
                    color: theme === 'light' ? '#000000' : '#ffffff',
                    height: '80vh',

                }}
            ></div>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default Theme