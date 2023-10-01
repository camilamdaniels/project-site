import React, { useState } from 'react'
import FlexBetween from './FlexBetween'
import { Box } from '@mui/material'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Skills from './Skills'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

const Navbar = () => {

    const [selected, setSelected] = useState('about')
  return (
    <Router>
        <FlexBetween
            mb='0.25rem'
            ml='4rem'
            mr='4rem'
            p='1rem 1rem'
            color='lightgrey'
        >
            <FlexBetween gap='.25rem'>
                <Box sx={{ color: '#f8ccd9' }}>
                    CAMILA
                </Box> 
                <Box sx={{ color: '#e75480' }}> 
                    DANIELS
                </Box>
            </FlexBetween>

            <FlexBetween gap='2rem'>
                <Box sx={{ '&:hover': { color: '#e75480' }}}>
                    <Link
                        to='/about'
                        onClick={() => setSelected('about')}
                        style={{
                            color: selected === 'about' ? '#e75480' : 'inherit',
                            textDecoration: 'inherit'
                        }}
                    >
                        About
                    </Link>
                </Box>

                <Box sx={{ '&:hover': { color: '#e75480' }}}>
                    <Link
                        to='/skills'
                        onClick={() => setSelected('skills')}
                        style={{
                            color: selected === 'skills' ? '#e75480' : 'inherit',
                            textDecoration: 'inherit'
                        }}
                    >
                        Skills 
                    </Link>
                </Box>

                <Box sx={{ '&:hover': { color: '#e75480' }}}>
                    <Link
                        to='/portfolio'
                        onClick={() => setSelected('portfolio')}
                        style={{
                            color: selected === 'portfolio' ? '#e75480' : 'inherit',
                            textDecoration: 'inherit'
                        }}
                    >
                        Portfolio
                    </Link>
                </Box>
                    
                <Box sx={{ '&:hover': { color: '#e75480' }}}>
                    <Link
                        to='/contact'
                        onClick={() => setSelected('contact')}
                        style={{
                            color: selected === 'contact' ? '#e75480' : 'inherit',
                            textDecoration: 'inherit'
                        }}
                    >
                        Contact Me
                    </Link>
                </Box>
            </FlexBetween>
        </FlexBetween>

        <Routes>
            <Route path='/about' component={About}/>
            <Route path='/skills' component={Skills}/>
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/contact' component={Contact}/>
        </Routes>
    </Router>
  )
}

export default Navbar