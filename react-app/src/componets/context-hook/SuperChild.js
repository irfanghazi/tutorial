import React, { useContext } from 'react'
import { Context } from './ParentContext'

const SuperChild = () => {
    const { appColor } = useContext(Context)
    return (
        <div>
            <h2 style={{ color: appColor }}>Super Child </h2>
        </div>
    )
}

export default SuperChild