import NavMenu from './NavMenu'
import { toggle } from './NavMenu/navMenuSlice'
import menuIcon from '@assets/images/menu.svg'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const activeSection = useAppSelector((state) => state.activeSection.id)

  return (
    <nav
      className={`${
        activeSection !== 'home' ? 'bg-light-gray/90' : 'bg-light-gray'
      }  h-auto px-8 fixed top-0 left-0 right-0 z-40 backdrop-blur-md`}>
      <div className='md:container md:px-20 h-20 flex items-center justify-between'>
        <a href='/' className='text-black text-2xl font-extrabold'>
          DARMA<span className='text-purple'>.</span>
        </a>
        <button
          className='border-[1px] border-slate-900 h-8 w-8 flex justify-center items-center rounded-full hover:scale-105 transition-all md:hidden'
          onClick={() => dispatch(toggle())}>
          <img src={menuIcon} alt='Click to toggle the menu list' />
        </button>
        <NavMenu />
      </div>
    </nav>
  )
}

export default Navbar
