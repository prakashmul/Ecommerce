import React from 'react'

import { Outlet } from 'react-router-dom'
import { SideBar } from '../side-bar'

const AuthLayout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <SideBar />
        <Outlet />
    </div>
  )
}

export default AuthLayout