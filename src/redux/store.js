import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/card/cardSlice'


export const store = configureStore({
  reducer: {
    todo: todoReducer
  },
})