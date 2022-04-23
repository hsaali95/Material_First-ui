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

export default function CompanyDescription() {
  return (
    <Card sx={{ minWidth: 275,padding:'43px' }} >
      <CardContent>
        
        <Typography variant="h5" component="p" sx={{fontWeight:'bolder',letterSpacing:'1px'}}>
        OUR COMPANY <br/>
          Nexainnovation Software <br/>
          156 <br/>
          10,1795Q,M <br/>
          12.5 BILLION REVENUE <br/>
          8,028
        </Typography>
       
      </CardContent>
      
    </Card>
  );
}
