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

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275,padding:'43px' }} >
      <CardContent>
        <Typography sx={{ fontSize: 14,color:'brown',fontWeight:'bolder',letterSpacing:'1px' }}  gutterBottom>
            PROPERTIES
        </Typography>
        <Typography variant="h4" component="div">
          Draw Your <br/>
          Elegance
        </Typography>
        <Typography variant='body2' component='p' sx={{ mt: 4,color:'black' }} >
          This proper of nexainnovation software
        </Typography>
      </CardContent>
      <CardActions >
         <ButtonGroup variant="contained" aria-label="outlined  button group" sx={{boxShadow:'0',borderRadius:'0',ml:'57px'}}>
            <Button sx={{bgcolor:'lightgray',color:'black'}}>1</Button>
            <Button sx={{bgcolor:'lightgray',color:'black'}}>0</Button>
            
         </ButtonGroup>
      </CardActions>
    </Card>
  );
}
