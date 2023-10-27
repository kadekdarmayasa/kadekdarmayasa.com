import Certification from './Certification'
import Contact from './Contact'
import HighlightedProject from './HighlightedProject'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useAppSelector } from '../hooks/useAppSelector'
import { close } from '../slices/NavMenuSlice'

const Main = () => {
  const navMenu = useAppSelector((state) => state.navMenu.value)
  const dispatch = useAppDispatch()

  return (
    <main onClick={() => navMenu === 'opened' && dispatch(close())}>
      <HighlightedProject />
      <Certification />
      <Contact />
    </main>
  )
}

export default Main
