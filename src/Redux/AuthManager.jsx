import { createSlice } from "@reduxjs/toolkit"

console.log("AuthManager loaded")

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: null,
    isAuthenticated: false
  },

  reducers: {

    login: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
    },

    register: (state, action) => {
      state.user = action.payload
    },

    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
    }

  }
})

export const { login, register, logout } = authSlice.actions

export default authSlice.reducer