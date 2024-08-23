import React, { useEffect } from 'react'

import { Outlet, useNavigate } from 'react-router-dom'
import { SideBar } from '../side-bar'
import { useAuth } from '../../hooks/use-auth'

const AuthLayout = () => {
  const navigate = useNavigate();
  const { accessToken } = useAuth();

  useEffect(() => {

    if (!accessToken || accessToken == undefined) {
      navigate('/signin')
    }
  }, [accessToken, navigate])
  return (
    <div className='w-full flex'>
      <SideBar />
      <div className='ml-60 w-full overflow-hidden'>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout