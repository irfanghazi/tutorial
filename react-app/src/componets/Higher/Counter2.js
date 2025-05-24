import React from 'react'
import counter from './HOC/counter'

const Counter2 = (props) => {
    const {increment, count}  = props
  return (
    <>
    <button onClick={increment}>Counter2:{count}</button>
    Counter2</>
  )
}

export default counter(Counter2)