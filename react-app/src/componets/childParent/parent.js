import React, { useState } from 'react'
import Child from './child'

const Parent = () => {
    const [count, setCount] = useState(0)
    const incrementCounter = () => {
        setCount((preCount) => preCount + 1)
    }
    return (
        <div>
            <div>Count:{count}</div>
            <Child incrementCounter={incrementCounter} />
        </div>
    )
}

export default Parent