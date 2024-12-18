import React, { useState } from 'react'

const Counter = (OriginalComponent) => {
    //! always write the logic inside the new created function
    const UpdatedComponent = () => {
        const [count, setCount] = useState(0)
        const incrementCount = () => {
            setCount((prev) => prev + 1)
        }
        return <OriginalComponent count={count} incrementCount={incrementCount} />
    }
    return UpdatedComponent
}

export default Counter
