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
        <Box color='grey' sx={{ fontWeight: 200, mb: '2rem' }}>Click on images to view projects.</Box>

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
              <a href='https://camilamdaniels.github.io/widgets/'>
                <img src={require('./images/widgets-1.jpg')} class='hover'/>
                <p class="text">text</p>
              </a>
            </div>
            <div class="two">
              <a href='https://camilamdaniels.github.io/stock-dashboard/'>
                <img src={require('./images/stock-1.jpg')} />
              </a>
            </div>
            <div class="three">
              <a href='https://camilamdaniels.github.io/widgets/'>
                <img src={require('./images/widgets-2.jpg')} />
              </a>
            </div>
            <div class="four">
              <a href='https://camilamdaniels.github.io/calculator/'>
                <img src={require('./images/calculator.png')} />
              </a>
            </div>
            <div class="five">
              <a href='https://camilamdaniels.github.io/widgets/'>
                <img src={require('./images/widgets-3.jpg')} />
              </a>
            </div>
            <div class="six">
              <a href='https://camilamdaniels.github.io/stock-dashboard/'>
                <img src={require('./images/stock-3.jpg')} />
              </a>
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