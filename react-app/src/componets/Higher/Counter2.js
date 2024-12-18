import React, { useState } from 'react'
import Counter from './HOC/counter'

const Counter2 = (props) => {
    // const [count, setCount] = useState(0)
    // const incrementCount = () => {
    //     setCount(count + 1)
    // }
    const {count,incrementCount } = props

    return (
        <>
            <div>
            <button onClick={incrementCount}>Counter2: {count}</button>
            </div>
                
        </>
    )
}

export default Counter(Counter2)