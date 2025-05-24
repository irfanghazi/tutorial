import React, { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar'

const ProgressContent = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((preVal) => preVal + 1)
    }, 100)

    return () => {
      clearInterval(interval)
    }

  }, [])
  return (
    <div className='m-conatiner'>
      <h2>Progress Bar</h2>
      <ProgressBar value={value} />
    </div>
  )
}

export default ProgressContent