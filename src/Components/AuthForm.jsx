import React from 'react'

function AuthForm({ children, title }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export default AuthForm