import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function Register() {

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    username: "",
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

    localStorage.setItem(
      "user",
      JSON.stringify(formData)
    )

    dispatch({
      type: "REGISTER",
      data: formData
    })

    alert("Registration successful ")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />

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
        Register
      </button>
    </form>
  )
}

export default Register