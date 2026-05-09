import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function Login() {

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const savedUser = JSON.parse(
      localStorage.getItem("user")
    )

    if (
      savedUser &&
      savedUser.email === formData.email &&
      savedUser.password === formData.password
    ) {

      dispatch({
        type: "LOGIN",
        data: savedUser
      })

      alert("Login successful ")

    } else {
      alert("Invalid email or password")
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2>Login</h2>

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit">
        Login
      </button>

    </form>
  )
}

export default Login