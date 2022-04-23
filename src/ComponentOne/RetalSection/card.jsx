import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonGroup, Grid } from '@mui/material';
import CircleSection from './CircleSection';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CardSection() {
  return (
    <Card sx={{ minWidth: 275,padding:'43px' }} >
      <CardContent>
        <Typography sx={{ fontSize: 14,color:'brown',fontWeight:'bolder',letterSpacing:'1px'}}  gutterBottom>
            OUR GOALS
        </Typography>
        <Typography variant="h4" component="div">
       Why Retal?
        </Typography>
       
       
      </CardContent>
      
      <Grid container spacing={2}>
  <Grid item lg={12} md={12} sm={12} >
  <CircleSection/>
  </Grid> 
</Grid>

 <Grid container spacing={2} mt='10px'>
  <Grid item lg={12} md={12} sm={12}>
  <CircleSection/>
  </Grid> 
</Grid>
 
       {/* <CircleSection/> <br/>
       <CircleSection/> */}
      
    </Card>
  );
}
