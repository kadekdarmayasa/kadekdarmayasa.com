import Navbar from './Navbar'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useAppSelector } from '../hooks/useAppSelector'
import { close } from '../slices/navMenuSlice'
import Banner from './Banner'

const Header = () => {
  const navMenu = useAppSelector((state) => state.navMenu.value)
  const dispatch = useAppDispatch()

  return (
    <header onClick={() => navMenu === 'opened' && dispatch(close())}>
      <Navbar />
      <Banner />
    </header>
  )
}

export default Header
