import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'

const menus = ['Home', 'Projects', 'Certifications', 'Contact Me']

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string>('Home')

  return (
    <nav className='bg-light-gray h-auto px-8'>
      <div className='sm:container px-20 h-16 flex items-center justify-between'>
        <a href='/' className='text-black text-2xl font-extrabold'>
          DARMA<span className='text-purple'>.</span>
        </a>
        <ul className='flex'>
          {menus.map((menu) => {
            return (
              <li
                key={uuidv4()}
                className='ml-5'
                onClick={() => setActiveMenu(menu)}>
                <a
                  href={`#${menu.toLowerCase()}`}
                  className={`font-medium ${
                    menu === activeMenu ? 'text-purple' : 'text-black'
                  }`}>
                  {menu}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
