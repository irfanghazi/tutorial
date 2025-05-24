import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
    const location = useLocation()
    console.log("loca------", location);
  return (
    <div>Contact</div>
  )
}

export default Contact