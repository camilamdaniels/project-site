import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <div>
        <Navbar />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
  )
}

export default Landing