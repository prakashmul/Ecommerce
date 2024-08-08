import React, { useEffect } from 'react'

import { Outlet, useNavigate } from 'react-router-dom'
import { SideBar } from '../side-bar'
import { useAuth } from '../../hooks/use-auth'

const AuthLayout = () => {
  const navigate = useNavigate();
  const {accessToken} = useAuth();

  useEffect(() => {

    if(!accessToken || accessToken == undefined){
      navigate('/signin') 
    }
  }, [accessToken, navigate])
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <SideBar />
        <Outlet />
    </div>
  )
}

export default AuthLayout