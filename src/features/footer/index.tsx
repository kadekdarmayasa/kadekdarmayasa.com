import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { close } from '@features/navbar/NavMenu/navMenuSlice'

const Footer = () => {
  const navMenu = useAppSelector((state) => state.navMenu.value)
  const dispatch = useAppDispatch()

  return (
    <footer
      className='px-8 text-black mt-32 pb-10'
      onClick={() => navMenu === 'opened' && dispatch(close())}>
      <div className='sm:container md:px-20'>
        <p className='text-lg xs:text-xl leading-9 font-medium'>
          &copy;2023 - Made with ReactJS and designed happily with Figma by
          Kadek Darmayasa
        </p>
      </div>
    </footer>
  )
}

export default Footer
