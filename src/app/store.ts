import { configureStore } from '@reduxjs/toolkit'
import navMenuReducer from '@features/navbar/NavMenu/navMenuSlice'
import sectionReducer from './slices/sectionSlice'

export const store = configureStore({
  reducer: {
    navMenu: navMenuReducer,
    activeSection: sectionReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
