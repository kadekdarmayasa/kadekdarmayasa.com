import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SectionProps {
  id: 'home' | 'skills' | 'projects' | 'achievements' | 'contact'
  name: 'Home' | 'Skills' | 'Projects' | 'Achievements' | 'Contact Me'
}

const initialState: SectionProps = {
  id: 'home',
  name: 'Home',
}

export const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    active: (state, action: PayloadAction<SectionProps>) => ({
      ...state,
      id: action.payload.id,
      name: action.payload.name,
    }),
  },
})

export const { active } = sectionSlice.actions
export default sectionSlice.reducer
