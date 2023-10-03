import React from 'react'
import { Box, Typography, ImageList, ImageListItem } from '@mui/material'
import './Portfolio.css'

const testItemData = [
  {
    img: 'widgets-1.jpg',
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
    <div id='portfolio'>
      <Box
        width='100%'
        mb='7rem'
      >
        <Box sx={{ fontWeight: 200 }}>PORTFOLIO</Box>
        <Box sx={{ m: '1rem', fontSize: '24px' }}>Recent Work</Box>
        <Box color='grey' sx={{ fontWeight: 200 }}>Click on images to view projects.</Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          gap='2rem'      
        >
          <div class="wrapper">
            <div class="one">
              <img src={require('./images/widgets-1.jpg')} />
            </div>
            <div class="two">
              <img src={require('./images/stock-1.jpg')} />
            </div>
            <div class="three">
              <img src={require('./images/widgets-2.jpg')} />
            </div>
            <div class="four">
              <img src={require('./images/calculator.png')} />
            </div>
            <div class="five">
              <img src={require('./images/widgets-3.jpg')} />
            </div>
            <div class="six">
              <img src={require('./images/stock-3.jpg')} />
            </div>
          </div>
          {/* <ImageList
            sx={{ width: 1200, height: 800 }} cols={3} rowHeight={400}
          >
            {testItemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList> */}
        </Box>
      </Box>
    </div>
  )
}

export default Portfolio