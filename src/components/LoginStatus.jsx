import React, { useState } from 'react'

const LoginStatus = () => {
    const[LoginIn, setLoginIn] = useState(false)
  return (
    <div>
      <h2>{LoginIn ? "Welcome Dani": "You are logged out"}</h2>
      <button onClick={() => setLoginIn(!LoginIn)}>{LoginIn ? "LogOut": "LogIn"}
        
      </button>
    </div>
  )
}

export default LoginStatus

