import React, { useState } from 'react'
import Counter from './HOC/counter'
const Counter1 = (props) => {
    const {count,incrementCount } = props
    // const [count, setCount] = useState(0)
    // const incrementCount = () => {
    //     setCount(count + 1)
    // }
  return (
    <>
    <button onClick={incrementCount}>Counter1: {count}</button>
    </>
  )
}

export default Counter(Counter1)