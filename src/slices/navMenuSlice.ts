import { createSlice } from '@reduxjs/toolkit'

interface NavMenuState {
  value: 'closed' | 'opened'
}

export const navMenuSlice = createSlice({
  name: 'nav-menu',
  initialState: {
    value: 'closed',
  } as NavMenuState,
  reducers: {
    toggle: (state) => {
      state.value = state.value === 'closed' ? 'opened' : 'closed'
    },
    close: (state) => {
      state.value = 'closed'
    },
  },
})

export const { close, toggle } = navMenuSlice.actions
export default navMenuSlice.reducer
