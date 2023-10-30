import { createSlice } from '@reduxjs/toolkit'

interface NavMenuState {
  value: 'closed' | 'opened'
}

const initialState: NavMenuState = {
  value: 'closed',
}

export const navMenuSlice = createSlice({
  name: 'nav-menu',
  initialState,
  reducers: {
    toggle: (state) => ({
      ...state,
      value: state.value === 'closed' ? 'opened' : 'closed',
    }),
    close: (state) => ({
      ...state,
      value: 'closed',
    }),
  },
})

export const { close, toggle } = navMenuSlice.actions
export default navMenuSlice.reducer
