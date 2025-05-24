import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ isAuthenticated, children }) => {
    console.log("isAuthenticated--------", isAuthenticated);
    if (!isAuthenticated) {
        return <Navigate to={'/login'} />
    }
    return children ? children : <Outlet />

}

export default ProtectedRoute