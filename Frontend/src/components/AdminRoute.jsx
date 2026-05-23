import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contex/AuthContextProvider'

function AdminRoute({ children }) {

  const { isAdmin } = useContext(AuthContext)

  if (!isAdmin) {
    return <Navigate to='/' />
  }

  return children
}

export default AdminRoute