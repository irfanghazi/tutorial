import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const About = () => {
    return (
        <>
            <p> Welcome to About Page</p>
            <NavLink className='nav-link' to='/employee/irfan/23' state={{name:'irfan'}}>Irfan</NavLink>
            <NavLink to='/employee/samay/27' >Samay</NavLink>
        </>
    )
}

export default About