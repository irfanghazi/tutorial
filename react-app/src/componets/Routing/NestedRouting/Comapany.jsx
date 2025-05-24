import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Comapany = () => {
    return (
        <>
            <Link className='nav-link' to='admin'>Admin</Link>
            <Link className='nav-link' to='student'>Student</Link>
            <Link className='nav-link' to='faculty'>Faculty</Link>
            <Outlet />
        </>
    )
}

export default Comapany