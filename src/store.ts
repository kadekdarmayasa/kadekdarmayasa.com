import { configureStore } from '@reduxjs/toolkit'
import navMenuReducer from './slices/navMenuSlice'

export const store = configureStore({
  reducer: {
    navMenu: navMenuReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
