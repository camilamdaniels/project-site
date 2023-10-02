import React, { useState } from 'react'
import FlexBetween from './FlexBetween'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Skills from './Skills'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = () => {
  const [selected, setSelected] = useState('contact')
  return (
    <Router>
        <FlexBetween pb='4rem' pl='10rem' pr='10rem' backgroundColor='#e75480' color='white'>
          <Box sx={{ '&:hover': { color: 'lightgrey' }}}>
            <Link
              to='/about'
              onClick={() => setSelected('about')}
              style={{
                color: selected === 'about' ? 'lightgrey' : 'inherit',
                textDecoration: 'inherit'
              }}
            >
              ABOUT
            </Link>
          </Box>

          <Box sx={{ '&:hover': { color: 'lightgrey' }}}>
            <Link
              to='/skills'
              onClick={() => setSelected('skills')}
              style={{
                color: selected === 'skills' ? 'lightgrey' : 'inherit',
                textDecoration: 'inherit'
              }}
            >
              SKILLS
            </Link>
          </Box>

          <Box sx={{ '&:hover': { color: 'lightgrey' }}}>
            <Link
              to='/portfolio'
              onClick={() => setSelected('portfolio')}
              style={{
                color: selected === 'portfolio' ? 'lightgrey' : 'inherit',
                textDecoration: 'inherit'
              }}
            >
              PORTFOLIO
            </Link>
          </Box>
                    
          <Box sx={{ '&:hover': { color: 'lightgrey' }}}>
            <Link
              to='/contact'
              onClick={() => setSelected('contact')}
              style={{
                color: selected === 'contact' ? 'lightgrey' : 'inherit',
                textDecoration: 'inherit'
              }}
            >
              CONTACT ME
            </Link>
          </Box>
        </FlexBetween>

        <Box backgroundColor='#e75480' color='white' sx={{ p: '4rem' }} style={{ display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', flexDirection: 'column' }}>
          <Box style={{ borderBottom: '1px solid lightgrey' }} sx={{ mb: '4rem' }} backgroundColor='#e75480' width='85%'>
          </Box>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Box>

        <Box backgroundColor='#e75480' color='white' sx={{ p: '4rem' }}>
          <LinkedInIcon sx={{ m: '1rem' }}/>
          <GitHubIcon sx={{ m: '1rem' }}/>
        </Box>

        <Box backgroundColor='#b94366' color='white' sx={{ p: '1rem', fontSize: '12px' }}>
          © 2023 Copyright: Camila Daniels
        </Box>

      <Routes>
          <Route path='/about' component={About}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/contact' component={Contact}/>
      </Routes>
    </Router>
  )
}

export default Footer