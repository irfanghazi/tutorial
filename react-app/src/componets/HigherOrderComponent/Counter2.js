import React from 'react'
import Counter from './HOC/Counter'

const Counter2 = (props) => {
    const {count, incrementCount} = props
  return (
    <div>
         <button onClick={incrementCount} >Counter1 : {count}</button>
    </div>
  )
}

export default Counter(Counter2)