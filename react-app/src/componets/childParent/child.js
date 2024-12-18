import React from 'react'

const child = (props) => {
    const { incrementCounter } = props
    return (
        <div>
            <button onClick={incrementCounter}>Increment</button>
        </div>
    )
}

export default child