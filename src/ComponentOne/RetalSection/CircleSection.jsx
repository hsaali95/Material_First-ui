import { Fab, Grid, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
import AddLocationSharpIcon from '@mui/icons-material/AddLocationSharp';
import CurrencyBitcoinSharpIcon from '@mui/icons-material/CurrencyBitcoinSharp';
import { useStyles } from '../../ComponentsAhmed.jsx/Header/HeaderStyles';

const CircleSection = () => {
  const classes = useStyles()
  return (
//     <Grid container spacing={3}>
//   <Grid item lg={1} md={1} sm={1} >
    
//   </Grid>
//   <Grid item lg={10} md={10} sm={10} xs={12} textAlign='center' sx={{display:'flex' ,justifyContent:'space-evenly'}}>
//   <Fab variant="extended" sx={{height:'88px',width:'100px',borderRadius:'50px',backgroundColor:'transparent'}}>
// <AddIcon sx={{padding:'27px'}}></AddIcon>
// </Fab>
// <Fab variant="extended" sx={{height:'88px',width:'100px',borderRadius:'50px',backgroundColor:'transparent'}}>
// <AddIcon sx={{padding:'27px'}}></AddIcon>
// </Fab>
// <Fab variant="extended" sx={{height:'88px',width:'100px',borderRadius:'50px',backgroundColor:'transparent'}}>
// <AddIcon sx={{padding:'27px'}}></AddIcon>
// </Fab>
//   </Grid>
// </Grid>

<Grid container spacing={1} sx={{ml:'25px'}} className={classes.circleMarginleft}>
  <Grid item lg={4} md={4} sm={4} xs={6} sx={{textAlign:'center'}}>
  <Fab variant="extended" sx={{height:'88px',width:'100px',borderRadius:'50px',backgroundColor:'transparent'}}>
 <MonetizationOnSharpIcon sx={{padding:'27px'}}></MonetizationOnSharpIcon>
 </Fab>
 <Typography variant='body1' component='p' sx={{mt:'10px'}}>Highest Investment House</Typography>
  </Grid>
  <Grid item lg={4} md={4} sm={4} xs={6} sx={{textAlign:'center'}}>
  <Fab variant="extended" sx={{height:'88px',width:'100px',borderRadius:'50px',backgroundColor:'transparent'}}>
 <AddLocationSharpIcon sx={{padding:'27px'}}></AddLocationSharpIcon>
 </Fab>
 <Typography variant='body1' component='p' sx={{mt:'10px'}}>Strategic Locations</Typography>
  </Grid>
  <Grid item lg={4} md={4} sm={4} xs={6} sx={{textAlign:'center'}}>
  <Fab variant="extended" sx={{height:'88px',width:'100px',borderRadius:'50px',backgroundColor:'transparent'}}>
 <CurrencyBitcoinSharpIcon sx={{padding:'27px'}}></CurrencyBitcoinSharpIcon>
 </Fab>
 <Typography variant='body1' component='p' sx={{mt:'10px'}}>Inteligent Price</Typography>
  </Grid>
 
</Grid>
  )
}

export default CircleSection