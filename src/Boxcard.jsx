import React from 'react'
import { Box } from '@mui/system'
import classes from './components/style.module.css'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from './avatarimages/card1.png'
import spider_card_image from './avatarimages/spider_card_image.png'

const Boxcard = () => {
  return (
    <>
        <Box className={classes.main_box_Card}>
          <Box className={classes.sub_box_card}>
            <Box className={classes.Box_header}>
              <WorkspacePremiumIcon/>
              <Box sx={{mr:'125px'}}>
                  <Typography variant='button' component='p'>Rewards</Typography>
                  <Typography variant='h4' component='h4'>32.111</Typography>
              </Box>  
              <Button className={classes.button_styling} color={'primary'} variant={'contained'}>
                COLLECT ALL
              </Button>
            </Box>
            <Box className={classes.cards_section}>
            <Grid container spacing={1} sx={{mt:'30px'}}>
  <Grid item xs={4} >
    
    <Box className={classes.box_border_style}>
    <img src={spider_card_image} width='80px' height='160px'/>
    <Typography variant='body1' component='p'>2.113</Typography>
    </Box>
  </Grid> 
  <Grid item xs={4} >
    <Box className={classes.box_border_style}>
    <img src={spider_card_image} width='80px' height='160px'/>
    <Typography variant='body1' component='p'>2.113</Typography>
    </Box>
  </Grid> 
  <Grid item xs={4} >
    
    <Box className={classes.box_border_style}>
    <img src={spider_card_image} width='80px' height='160px'/>
    <Typography variant='body1' component='p'>2.113</Typography>
    </Box>
  </Grid> 
</Grid>
            </Box>
          </Box>
        </Box>
    </>
  )
}

export default Boxcard