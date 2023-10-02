import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import FlexBetween from './FlexBetween'

const About = () => {
  return (
    <FlexBetween
      height='700px'
      sx={{
        backgroundColor: '#e75480',
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
        <Typography>ABOUT ME</Typography>
        <Typography variant='h5' sx={{ mt: '1rem', mb: '1rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
        <Typography fontSize='14px'> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
           qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Button sx={{ color: 'white' }}>Download Resume</Button>
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
        <Typography variant='h5' sx={{ mt: '1rem', mb: '1rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore
        </Typography>
        <Typography fontSize='14px'>
           Duis aute irure dolor in 
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
           qui officia deserunt mollit anim id est laborum.
        </Typography>

        <Button sx={{ color: 'white' }}>
          Github Link
        </Button>
      </Box>
    </FlexBetween>
  )
}

export default About