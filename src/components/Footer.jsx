import React, { useState } from 'react'
import FlexBetween from './FlexBetween'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Skills from './Skills'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { HashLink as Link } from 'react-router-hash-link'

const Footer = () => {
  const [selected, setSelected] = useState('contact')
  return (
    <Router>
        <FlexBetween pb='4rem' pl='10rem' pr='10rem' backgroundColor='#ff80ff' color='white'>
          <Box sx={{ '&:hover': { color: 'lightgrey' }}}>
            <Link
              to='/#about'
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
              to='/#skills'
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
              to='/#portfolio'
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
              to='/#contact'
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

        <Box 
          backgroundColor='#ff80ff' 
          color='white' 
          sx={{ 
            p: '4rem', 
            fontWeight: 200 
          }} 
          style={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', 
            flexDirection: 'column' 
          }
        }>
          <Box style={{ borderBottom: '1px solid lightgrey' }} sx={{ mb: '4rem' }} backgroundColor='#e75480' width='85%'>
          </Box>
          For God so loved the world, that He gave His only begotten Son, that whosoever 
          believeth in Him, shall not perish, but have everlasting life. John 3:16 
        </Box>

        <Box backgroundColor='#ff80ff' color='white' sx={{ p: '4rem' }}>
          <LinkedInIcon sx={{ m: '1rem' }}/>
          <GitHubIcon sx={{ m: '1rem' }}/>
        </Box>

        <Box backgroundColor='#cc66cc' color='white' sx={{ p: '1rem', fontSize: '12px', fontWeight: 200 }}>
          © 2023 Copyright: Camila Daniels
        </Box>

      {/* <Routes>
          <Route path='/about' component={About}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/contact' component={Contact}/>
      </Routes> */}
    </Router>
  )
}

export default Footer