import React from 'react'
import { Box, Button, Typography, CardActions } from '@mui/material'
import FlexBetween from './FlexBetween'

const About = () => {
  return (
    <div id='about'>
      <FlexBetween
      height='700px'
      sx={{
        backgroundColor: '#ff80ff',
        color: 'white',
      }}
    >
      <Box
        width='50%'
        style={{
          display: 'flex', 
          flexDirection: 'column'
        }}
        sx={{
          m: '4rem',
          textAlign: 'left'
        }}
      >
        <Box sx={{ fontWeight: 200 }}>ABOUT ME</Box>
        <Box sx={{ mt: '1rem', mb: '1rem', fontSize: '24px' }}>In college, I spent a lot of time solving algorithms by hand - </Box>
        <Box sx={{ fontSize: '14px' }}> 
          now I implement them in code to solve engineering problems. 
          I'm particularly interested in blockchain technology, quantitative 
          finance, machine learning and robotics. When my compiler isn't yelling at me,
          I enjoy reading, 
          cooking, and arts & crafts. Every 6 months or so I like to 
          step away from the computer and go outside. My moments in the 
          sun are fleeting, but deeply enjoyed.
        </Box>
        <CardActions>
          <Button sx={{ color: 'white' }}>Download Resume</Button>
        </CardActions>
      </Box>
      
      <Box
        width='50%'
        style={{
          display: 'flex', 
          flexDirection: 'column'
        }}
        sx={{
          textAlign: 'left',
          m: '4rem'
        }}
      >
        <Box sx={{ mt: '1rem', mb: '1rem', fontSize: '24px' }}>
          Over the past several years, I have acquired a robust skillset 
        </Box>
        <Box sx={{ fontSize: '14px' }}>
          inluding but not limited to the following:
            <ul>
              <li>Programming skills in Java, JavaScript, React, Node.js, MySQL, Express and MongoDB</li>
              <li>Experience analyzing statistical data and building financial models</li>
              <li>Experience building custom dashboards in MS Excel to manage projects</li>
              <li>Experience facilitating software development team meetings using Agile methodology</li>
              <li>Experience developing databases and reports on progress of federal programs</li>
            </ul>
        </Box>

        <CardActions>
          <Button sx={{ color: 'white' }}>
            Github Link
          </Button>
        </CardActions>
      </Box>
    </FlexBetween>
    </div>
  )
}

export default About