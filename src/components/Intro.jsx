import React from 'react'
import FlexBetween from './FlexBetween'
import { Box, Typography, Button } from '@mui/material'

const Intro = () => {
  return (
    <FlexBetween
      ml='4rem'
      mr='4rem'
      mt='7rem'
      mb='10rem'
    >
      <Box
        width='50%'
        style={{
          display: 'flex', 
          flexDirection: 'column'
      }}
      >
        <Typography
          sx={{
            m: '1rem'
          }}
        >
            Hi! I'm a mathematician & web developer
        </Typography>
        <Typography variant='h3'>Camila Daniels</Typography>
        <Typography 
          color='lightgrey'
          sx={{
            m: '1.5rem'
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Typography>
        <Box
          sx={{
            m: '1.5rem'
          }}
          style={{
            flexDirection: 'row'
          }}
        >
          <Button
            sx={{
              color: 'white',
              backgroundColor: '#e75480',
              boxShadow: '0.05rem 0.05rem 0.05rem 0.05rem rgba(238, 135, 166, .4)',
              borderRadius: '3rem',
              mr: '2rem'
            }}
          >
            Hire Me
          </Button>
          <Button
            sx={{
              color: '#e75480'
            }}
          >
            Download Resume
          </Button>
        </Box>
      </Box>

      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        width='50%'
      >
        Profile Picture
      </Box>
    </FlexBetween>
  )
}

export default Intro