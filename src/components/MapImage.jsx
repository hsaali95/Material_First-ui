import React from 'react'
import { Box,Grid, Typography,Container } from "@mui/material";
import map_image from  '../avatarimages/map_image.jpg'

const MapImage = () => {
  return (
    <Container maxWidth="lg" sx={{height:'100vh',display:'flex',justifyContent:'center'}} >
     <img src={map_image} alt='map_image' height ='600px' width='1500px' />
    </Container>
  )
}

export default MapImage