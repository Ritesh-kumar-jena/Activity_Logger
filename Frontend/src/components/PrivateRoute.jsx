import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contex/AuthContextProvider'

function PrivateRoute({ children }) {

  const { isLogin } = useContext(AuthContext)

  if (!isLogin) {
    return <Navigate to='/login' />
  }

  return children
}

export default PrivateRoute