import React, { createContext, useState } from 'react'
import ChildContext from './ChildContext'

export const Context = createContext()

const ParentContext = () => {
    const [color, setColor] = useState('red')
    return (
        <Context.Provider value={{ appColor: color }}>
            <div>ParentContext</div>
            <ChildContext />
        </Context.Provider>
    )
}

export default ParentContext