import React, { useState } from 'react'

const counter = () => {

 const UpdatedCounter = (OriginalComponent) => {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount((preCount) => preCount+1)
    }

    return <OriginalComponent count ={count} incrementCount = {incrementCount}/>
 }
 return UpdatedCounter
}

export default counter