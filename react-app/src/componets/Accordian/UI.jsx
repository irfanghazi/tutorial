import React, { useState } from 'react'


const UI = ({ data, isActive , toggleHandler}) => {

  return (
    <>
      <div className='quote'>
        <p>{data.quote}
          <button onClick={toggleHandler}>{isActive ? 'Close' : "Show"}</button>
        </p>
        <p>{isActive && data.author}</p>
      </div>
    </>
  )
}

export default UI