import React, { useEffect, useState } from 'react'

const ProgressBar = ({ value = 0 }) => {
    const [percentage, setPercentage] = useState(value)
    useEffect(() => {
        setPercentage(Math.min(100, Math.max(value, 0)))
    }, [value])
    return (
        <div className='progress-bar'>
            <span style={{ color: percentage > 48 ? 'white' : 'black' }}>{percentage}%</span>
            <div style={{ width: `${percentage}%` }} />
        </div>
    )
}

export default ProgressBar