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
      } transition-all md:scale-100 md:opacity-100 py-5 md:py-0`}>
      {menus.map((menu) => {
        return (
          <li
            key={uuidv4()}
            className='md:ml-5'
            onClick={() => setActiveMenuItem(menu.name)}>
            <a
              href={`${menu.href}`}
              className={`font-medium text-lg hover:text-purple transition-all min-h-[44px] mb-4 md:mb-0 flex md:items-center md:justify-center relative ${
                menu.name === activeMenuItem ? 'text-purple' : 'text-black'
              }`}>
              <hr
                className={`
                  bg-purple/40 rounded-full w-[20px]  h-[2px] absolute bottom-1 transition-all
                    ${
                      menu.name === activeMenuItem ? 'opacity-100' : 'opacity-0'
                    }  
                `}
              />
              {menu.name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default NavMenu
