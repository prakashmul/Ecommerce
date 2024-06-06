import React from 'react'
import Sidebar from '../side-bar'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default AuthLayout