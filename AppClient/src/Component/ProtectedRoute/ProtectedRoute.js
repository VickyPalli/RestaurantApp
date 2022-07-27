import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  let user = localStorage.getItem("user")
  return (
    <div>
      {user ? children : <Navigate to ="/user/login"/>}
    </div>
  )
}

export default ProtectedRoute
