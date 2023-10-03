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
        sx={{
            textAlign: 'left'
        }}
      >
        <Box
          sx={{
            m: '1rem',
          }}
        >
            Hi! I'm a mathematician & web developer
        </Box>
        <Box sx={{ m: '1rem', fontSize: '48px' }}>Cam Daniels</Box>
        <Box
          color='grey'
          sx={{
            m: '1rem'
          }}
        >
          I am a full stack developer and bootcamp grad with an applied math background whose passionate about data science and machine learning. Let's keep in touch! 
        </Box>
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
              backgroundColor: '#ff80ff',
              boxShadow: '0.05rem 0.05rem 0.05rem 0.05rem rgba(238, 135, 166, .4)',
              borderRadius: '2.5rem',
              mr: '2rem',
              width: '150px'
            }}
          >
            Hire Me
          </Button>
          <Button
            sx={{
              color: '#ff80ff'
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
        <Box 
          component='img'
          sx={{ width: 400, height: 400, borderRadius: '50%' }}
          src={require('./images/avatar.jpg')}
          alt='avatar'
        />
      </Box>
    </FlexBetween>
  )
}

export default Intro