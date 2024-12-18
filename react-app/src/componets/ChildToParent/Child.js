import React from 'react'

const Child = (props) => {
  return (
    <>
    <button onClick = {props.incrementCount}>Increment</button>
    </>
  )
}

export default Child