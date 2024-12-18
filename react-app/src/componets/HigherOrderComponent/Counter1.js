import React from 'react'
import Counter from './HOC/Counter'
const Counter1 = (props) => {
    const {count, incrementCount} = props
  return (
    <>
    <button onClick={incrementCount} >Counter1 : {count}</button>
    </>
  )
}

export default Counter(Counter1)