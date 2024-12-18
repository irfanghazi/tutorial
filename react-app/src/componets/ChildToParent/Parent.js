import React, { useState } from 'react'
import Child from "./Child"
const Parent = () => {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1)
    }
  return (
    <>
    <p>Count: {count}</p>
    <Child incrementCount = {incrementCount}/>
    </>
  )
}

export default Parent