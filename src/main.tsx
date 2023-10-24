import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import HighlightedProject from './components/HighlightedProject'
import Certification from './components/Certification'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <header>
      <Navbar />
      <Banner />
    </header>
    <main>
      <HighlightedProject />
      <Certification />
    </main>
  </React.StrictMode>,
)
