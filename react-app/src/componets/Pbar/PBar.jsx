
import React, { useEffect, useState } from 'react'
import PBarContent from './PBarContent'

const PBar = () => {
    const [value, setValue] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setValue((pre) => pre + 1)
        }, 100)

        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <>
            <div className='p_container'>
                <PBarContent value={value} />
            </div>
        </>
    )
}

export default PBar