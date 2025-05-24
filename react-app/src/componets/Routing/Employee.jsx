import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Employee = () => {
    const {name, age} = useParams()
    
    const location = useLocation()
    console.log("location------", location);

  return (
    <>
    <p>{`I am ${name} and age is ${age}`}</p>
    </>
  )
}

export default Employee