import React, { useState } from 'react'

const Counter = (OriginalComponent) => {
    const UpdatedCom = () => {
        const [count, setCount] = useState(0)
        const incrementCount = () => {
            setCount(count + 1)
        }
        return <OriginalComponent count={count} incrementCount={incrementCount} />
    }
    return UpdatedCom
}

export default Counter