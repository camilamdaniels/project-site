import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

const Landing = () => {
  return (
    <div>
        <Navbar />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
    </div>
  )
}

export default Landing