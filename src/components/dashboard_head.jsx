import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import dashboard_image from '../avatarimages/dashboard_heading.png'
import classes from './style.module.css'

const dashboard_head = () => {
  return (
    <>
        <Box>
            <img src={dashboard_image} alt='image' className={classes.dash_board_heading} />      
        </Box>
    </>
  )
}

export default dashboard_head