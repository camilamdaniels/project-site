import React, { useState } from 'react'
import FlexBetween from './FlexBetween'
import { Box } from '@mui/material'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Skills from './Skills'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { HashRouter } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'

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
                <Box sx={{ color: 'lightgrey' }}>
                    CAM
                </Box> 
                <Box sx={{ color: '#ff80ff' }}> 
                    DANIELS
                </Box>
            </FlexBetween>

            <FlexBetween gap='2rem'>
                <Box sx={{ '&:hover': { color: '#ff80ff' }}}>
                    <Link
                        to='/#about'
                        onClick={() => setSelected('about')}
                        style={{
                            color: selected === 'about' ? '#ff80ff' : 'inherit',
                            textDecoration: 'inherit'
                        }}
                    >
                        About
                    </Link>
                </Box>

                <Box sx={{ '&:hover': { color: '#ff80ff' }}}>
                    <Link
                        to='/#skills'
                        onClick={() => setSelected('skills')}
                        style={{
                            color: selected === 'skills' ? '#ff80ff' : 'inherit',
                            textDecoration: 'inherit'
                        }}
                    >
                        Skills 
                    </Link>
                </Box>

                <Box sx={{ '&:hover': { color: '#ff80ff' }}}>
                    <Link
                        to='/#portfolio'
                        onClick={() => setSelected('portfolio')}
                        style={{
                            color: selected === 'portfolio' ? '#ff80ff' : 'inherit',
                            textDecoration: 'inherit'
                        }}
                    >
                        Portfolio
                    </Link>
                </Box>
                    
                <Box sx={{ '&:hover': { color: '#ff80ff' }}}>
                    <Link
                        to='/#contact'
                        onClick={() => setSelected('contact')}
                        style={{
                            color: selected === 'contact' ? '#ff80ff' : 'inherit',
                            textDecoration: 'inherit'
                        }}
                    >
                        Contact Me
                    </Link>
                </Box>
            </FlexBetween>
        </FlexBetween>
    </Router>
  )
}

export default Navbar