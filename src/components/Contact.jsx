import React from 'react'
import { Box, Typography, Button, TextField } from '@mui/material'
import { styled } from '@mui/system'

const WhiteTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline': {
    color: 'white'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiOutlinedInput-input': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
})

const Contact = () => {
  return (
    <Box
      height='700px'
      sx={{
        backgroundColor: '#e75480',
        color: 'white',
      }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Typography sx={{ mb: '.5rem' }}>HIRE ME</Typography>
      <Typography sx={{ mb: '5rem' }}>Let's talk, and build something great</Typography>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' }
        }}
        noValidate
        autoComplete='off'
        style={{ flexDirection: 'row' }}
      >
          <WhiteTextField id='standard-basic' label='First Name' variant='standard' focused/>
          <WhiteTextField id='standard-basic' label='Last Name' variant='standard' focused/>
          <br></br>
          <WhiteTextField id='standard-basic' label='Email' variant='standard' focused/>
          <WhiteTextField id='standard-basic' label='Phone' variant='standard' focused/>
        
        <div>
          <WhiteTextField 
            id='standard-basic' 
            label='Message' 
            variant='standard'
            sx={{ width: '40ch', mb: '3rem' }}  
            focused
          />
        </div>

        <Button 
          sx={{
            color: 'white',
            backgroundColor: 'lightgreen',
            boxShadow: '0.05rem 0.05rem 0.05rem 0.05rem rgba(238, 135, 166, .4)',
            borderRadius: '2rem',
          }}
        >
          Get In Touch
        </Button>
      </Box>
    </Box>
  )
}

export default Contact