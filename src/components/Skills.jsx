import React, { useState } from 'react'
import { 
  Box, 
  Button, 
  Typography,
  Card,
  CardActions,
  CardContent,
  CardActionArea 
} from '@mui/material'
import FlexBetween from './FlexBetween'

const Skills = () => {
  return (
    <Box>
      <Typography p='2rem'>SKILLS</Typography>
      <Typography variant='h5'>Here's what I can do.</Typography>

      <FlexBetween gap='1rem' p='4rem'>
        <Card
          sx={{ 
            minWidth: 300,
            minHeight: 300,
            backgroundColor: '#e75480', 
            color: 'white',
            textAlign: 'left', 
            borderRadius: 0, 
            p: '1.5rem',
            boxShadow: 0
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color='white' gutterBottom>
              React
            </Typography>
            <Typography variant='body2' color='white'>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' sx={{ color: 'white' }}>Learn More</Button>
          </CardActions>
        </Card>

        <Card 
          sx={{ 
            minWidth: 300,
            minHeight: 300,
            backgroundColor: 'white', 
            textAlign: 'left',
            color: 'lightgrey',
            borderRadius: 0,
            p: '1.5rem',
            boxShadow: '0'
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color='grey' gutterBottom>
              JavaScript
            </Typography>
            <Typography variant='body2' color='grey'>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' sx={{ color: 'grey' }}>Learn More</Button>
          </CardActions>
        </Card>

        <Card 
          sx={{ 
            minWidth: 300,
            minHeight: 300, 
            backgroundColor: '#e75480', 
            textAlign: 'left', 
            color: 'white',
            borderRadius: 0,
            p: '1.5rem',
            boxShadow: 0
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color='white' gutterBottom>
              Java
            </Typography>
            <Typography variant='body2' color='white'>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' sx={{ color: 'white' }}>Learn More</Button>
          </CardActions>
        </Card>

      </FlexBetween>
    </Box>
  )
}

export default Skills