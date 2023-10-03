import React, { useState } from 'react'
import { 
  Box, 
  Button, 
  Typography,
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  useMediaQuery 
} from '@mui/material'
import FlexBetween from './FlexBetween'

const Skills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 900px)")
  return (
    <div id='skills'>
      <Box>
        <Box sx={{ fontWeight: 200 }} p='2rem'>SKILLS</Box>
        <Box sx={{ fontSize: '24px' }}>Here's what I can do.</Box>

        <FlexBetween 
          gap='1rem' 
          p='7rem'
          sx={isAboveMediumScreens ? {
              display: 'flex'
          } : {
              display: 'flex',
              flexDirection: 'column'
          }}
        >
          <Card
            sx={{
                minWidth: 300,
                minHeight: 300,
                backgroundColor: '#ff80ff', 
                color: 'white',
                textAlign: 'left', 
                borderRadius: 0, 
                p: '1.5rem',
                boxShadow: 0,
            }}
          >
            <CardContent>
              <Box sx={{ fontSize: 14, color: 'white', mb: '1rem' }} >
                React
              </Box>
              <Box sx={{ color: 'white' }}>
                As a member of Lambda School's December 2016 full-stack software engineering cohort, I was first exposed to React.
                I have since taken a number of Udemy courses and followed several online tutorials on the MERN stack. 
                All of the applications displayed in the portfolio below (including this site!) were built using React.
              </Box>
            </CardContent>
            <CardActions>
              <a href='https://github.com/camilamdaniels?tab=repositories'>
                <Button size='small' sx={{ color: 'white' }}>React Projects</Button>
              </a>
            </CardActions>
          </Card>

          <Card
            sx={{ 
              minWidth: 300,
              minHeight: 300,
              backgroundColor: 'white', 
              color: 'grey',
              textAlign: 'left', 
              borderRadius: 0, 
              p: '1.5rem',
              boxShadow: 0
            }}
          >
            <CardContent>
              <Box sx={{ fontSize: 14, color: 'grey', mb: '1rem' }} >
                Java
              </Box>
              <Box sx={{ color: 'grey' }}>
                I first started learning Java by completing a Java Programming Fundamentals specialization 
                on coursera.com taught by faculty at the University of California San Diego. I learned 
                object-oriented programming principles through these courses. I also completed an introductory
                Java programming class at the University of the Virgin Islands.
              </Box>
            </CardContent>
            <CardActions>
              <a href='https://www.coursera.org/specializations/java-object-oriented'>
                <Button size='small' sx={{ color: 'grey' }}>Coursera</Button>
              </a>
            </CardActions>
          </Card>

          <Card
            sx={{ 
              minWidth: 300,
              minHeight: 300,
              backgroundColor: '#ff80ff', 
              color: 'white',
              textAlign: 'left', 
              borderRadius: 0, 
              p: '1.5rem',
              boxShadow: 0
            }}
          >
            <CardContent>
              <Box sx={{ fontSize: 14, color: 'white', mb: '1rem' }} >
                SQL + MongoDB
              </Box>
              <Box sx={{ color: 'white' }}>
                Although my current portfolio doesn't include full-stack projects, I do have experience building them.
                In addition to the Mongo experience I gained at Lambda School, I completed a database design and 
                implementation course that focused on SQL and Microsoft Access at the University of the Virgin Islands.
              </Box>
            </CardContent>
            <CardActions>
              <Button size='small' sx={{ color: '#ff80ff' }}>Learn More</Button>
            </CardActions>
          </Card>

        </FlexBetween>
      </Box>
    </div>
  )
}

export default Skills