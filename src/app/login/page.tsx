'use client'

  import { AuthContextProvider } from '@/context/AuthContext'
import React from 'react'
import Login from './login'

export default function page() {
  return (
    <div className='flex'>
    <AuthContextProvider>
      <Login/>
    </AuthContextProvider>

    </div>
  )
}
