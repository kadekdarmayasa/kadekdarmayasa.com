import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useAppSelector } from '@hooks/useAppSelector'
import { menus } from '@data/menu'

const NavMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>('Home')
  const navMenu = useAppSelector((state) => state.navMenu.value)
  const activeSection = useAppSelector((state) => state.activeSection.name)

  useEffect(() => {
    setActiveMenuItem(activeSection)
  }, [activeSection])

  return (
    <ul
      className={`fixed md:static md:flex items-center mobile-xs:max-md:bg-light-gray/90 mobile-xs:max-md:backdrop-blur-lg top-20 md:top-0 z-40 md:z-auto left-0 px-8 md:px-0 right-0 origin-top ${
        navMenu === 'opened' ? 'scale-y-100 opacity-1' : 'scale-y-0 opacity-0'
      } transition-all md:scale-100 md:opacity-100`}>
      {menus.map((menu) => {
        return (
          <li
            key={uuidv4()}
            className='md:ml-5 nav-link-item'
            onClick={() => setActiveMenuItem(menu.name)}>
            <a
              href={`${menu.href}`}
              className={`font-medium text-lg hover:text-purple transition-all min-h-[44px] flex md:items-center md:justify-center ${
                menu.name === activeMenuItem ? 'text-purple' : 'text-black'
              }`}>
              {menu.name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default NavMenu
