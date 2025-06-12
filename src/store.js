import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'

// Example: import your reducers here
// import authReducer from './features/auth/authSlice'

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    counter: counterReducer,
  },
})