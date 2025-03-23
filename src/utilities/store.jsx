
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import cardReducer from './CardSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    card:cardReducer
  },
})

export default store;