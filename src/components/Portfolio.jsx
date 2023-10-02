import React from 'react'
import { Box, Typography, ImageList, ImageListItem } from '@mui/material'

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
]

const Portfolio = () => {
  return (
    <Box
      width='100%'
      mb='7rem'
    >
      <Typography>PORTFOLIO</Typography>
      <Typography variant='h5' sx={{ m: '1rem' }}>Recent Work</Typography>
      <Typography color='lightgrey'>Click on images to view source code.</Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}      
      >
        <ImageList
          sx={{ width: 1200, height: 800 }} cols={3} rowHeight={400}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img 
                srcSet={`${item.img}?w=300&h=300&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=300&h=300&fit=crop&auto=format`}
                alt={item.title}
                loading='lazy'
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  )
}

export default Portfolio