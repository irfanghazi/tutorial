import React, { useContext } from 'react'
import { Context } from './ParentContext'
import SuperChild from './SuperChild'

const ChildContext = () => {
    const { appColor } = useContext(Context)

    return (
        <div >
            <h2 style={{ color: appColor }}>Child Context</h2>
            <SuperChild />
        </div>
    )
}

export default ChildContext