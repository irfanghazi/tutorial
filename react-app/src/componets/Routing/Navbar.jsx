import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <ul className='nav'>
                <NavLink className='nav-link' to='/'>Home</NavLink>
                <NavLink className='nav-link' to='/about'>About</NavLink>
                <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                <NavLink className='nav-link' to='/search'>Search</NavLink>
                <NavLink className='nav-link' to='/company'>Company</NavLink>
                <NavLink className='nav-link' to='/orders'>Order</NavLink>
                <NavLink className='nav-link' to='/products'>Products</NavLink>
                <NavLink className='nav-link' to='/login'>Login</NavLink>
            </ul>
        </>
    )
}

export default Navbar