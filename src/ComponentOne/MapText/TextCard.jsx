import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonGroup } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function TextCard() {
  return (
    <Card sx={{ minWidth: 275,padding:'43px' }} >
      <CardContent>
        <Typography sx={{ fontSize: 14,color:'brown',fontWeight:'bolder',letterSpacing:'1px'}}  gutterBottom>
            INTRACTIVE MAP
        </Typography>
        <Typography variant="h4" component="div">
        Crafting In <br/>
          Syrategic <br/>
          Locales
        </Typography>
        <Typography variant='body2' component='p' sx={{ mt: 4,color:'black' }} >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/>
         when an unknown printer took a galley of type and scrambled it to make <br/>
        a type specimen book.
        </Typography>
        <Typography variant='body2' component='p' sx={{ mt: 4,color:'black' }} >
       Click below to explore our footprint <br/>
       around Saudi Arabia
        </Typography>
      </CardContent>
      <CardActions >
        <Button variant="contained" elevation={2} sx={{bgcolor:'transparent',color:'black',borderRadius:'0px',width:'265px',fontSize:'12px'}}>
            Disable elevation
        </Button>
      </CardActions>
    </Card>
  );
}
