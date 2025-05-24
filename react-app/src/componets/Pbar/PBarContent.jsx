import React, { useEffect, useState } from 'react'

const PBarContent = ({ value }) => {

    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        setPercentage(Math.min(100, Math.max(value, 0)))
    }, [value])
    return (
        <>
            <div className='p_bar'>
                <span>{percentage}</span>
                {/* <div style={{ width: { percentage } }} /> */}
                <div style={{ width: `${percentage}%` }} />
            </div>
        </>
    )
}

export default PBarContent