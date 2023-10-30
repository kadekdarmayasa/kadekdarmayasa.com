import React, { useEffect, useCallback } from 'react'
import { active } from './app/slices/sectionSlice'
import { SectionProps } from './app/slices/sectionSlice'
import { useAppDispatch } from './hooks/useAppDispatch'
import { useAppSelector } from './hooks/useAppSelector'
import { close } from './features/navbar/NavMenu/navMenuSlice'
import Navbar from './features/navbar'
import Banner from './features/banner'
import './index.css'
import HighlightedProject from './features/project'
import Certification from './features/certification'
import Contact from './features/contact'
import Footer from './features/footer'

const App = () => {
  const dispatch = useAppDispatch()
  const navMenu = useAppSelector((state) => state.navMenu.value)

  const handleScroll = useCallback(() => {
    const sections: SectionProps[] = [
      { id: 'home', name: 'Home' },
      { id: 'projects', name: 'Projects' },
      { id: 'certifications', name: 'Certifications' },
      { id: 'contact', name: 'Contact Me' },
    ]

    sections.forEach((section) => {
      const element = document.getElementById(section.id)

      if (element && window.scrollY >= element.offsetTop - 360) {
        dispatch(
          active({
            id: section.id,
            name: section.name,
          }),
        )
      }
    })
  }, [dispatch])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  return (
    <React.Fragment>
      <header onClick={() => navMenu === 'opened' && dispatch(close())}>
        <Navbar />
        <Banner />
      </header>
      <main onClick={() => navMenu === 'opened' && dispatch(close())}>
        <HighlightedProject />
        <Certification />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App
