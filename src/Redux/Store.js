import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./AuthManager"

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
})