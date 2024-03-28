
'use client'
import {SessionProvider} from 'next-auth/react'
const AuthProvired = ({children}) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default AuthProvired
