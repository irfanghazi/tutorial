import React from 'react'

const Login = () => {
    const login = () => {
        localStorage.setItem( 'isAuthenticated', "true" )
    }
    return (
        <>
            <button onClick={() => login}>Login</button>
        </>
    )
}

export default Login