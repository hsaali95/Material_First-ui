import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Paper, Grid, Typography,Container } from "@mui/material";
import style from './style.module.css'

export default function SimpleAccordion() {
  return (
    <>
    
       <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={0}>
        
        </Grid>
        <Grid item xs={12}>
           {/* start  of Accordion */}

           <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {/* add here header of Accordion */}
          <Container maxWidth="lg" >
      <Grid container spacing={1} sx={{textAlign:'start'}}>
        <Grid item xs={3} sx={{display:'flex'}}>
        
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Box sx={{display:'flex',flexDirection:'column',ml:'10px'}}>
        <Box sx={{color:'#5cd6d6',fontWeight:'bolder'}} >Anil Taneja</Box>
        <Box sx={{color:'#c2c2d6',fontWeight:'bolder'}}>Maxico | Project Leader</Box>
        <Box sx={{color:'#666699'}}>view full profile</Box>
        </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={{fontWeight:'bolder'}}>Current level</Box>
          <Box sx={{color:'#c2c2d6',fontSize:'20px'}}>Associate</Box>
        </Grid>
        <Grid item xs={2}>
        <Box sx={{fontWeight:'bolder'}}>Client Rating</Box>
          <Box sx={{color:'#c2c2d6',fontSize:'20px'}}>92 %</Box>
        </Grid>
        <Grid item xs={2}>
        <Box sx={{fontWeight:'bolder'}}>Project completed</Box>
          <Box sx={{color:'#c2c2d6',fontSize:'20px'}}>17</Box>
        </Grid>
        <Grid item xs={3}>
        <Box sx={{fontWeight:'bolder'}}>Years of professional experience</Box>
          <Box sx={{color:'#c2c2d6',fontSize:'20px'}}>20</Box>
        </Grid>
      </Grid>
    </Container>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* start of second Accordion */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
           <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={0}>
        
        </Grid>
        <Grid item xs={12}>
           {/* yahan adddddddddddddddddddddd */}
           <Box item xs={2} sx={{display:'flex'}}>
        
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Box sx={{display:'flex',flexDirection:'column',ml:'10px'}}>
        <Box sx={{color:'#5cd6d6',fontWeight:'bolder'}} >Stephen Holmes</Box>
        <Box sx={{color:'#c2c2d6',fontWeight:'bolder'}}>Turkey</Box>
        <Box sx={{color:'#666699'}}>view full profile</Box>
        </Box>
        </Box>
        </Grid>
        <Grid item xs={0}>
    
        </Grid>
      </Grid>
    </Container>
        </AccordionSummary>
        <AccordionDetails sx={{mt:'15px'}}>
        {/* 1st section of description */}
         <Container maxWidth="lg" >
      <Grid container spacing={2} sx={{mt:"1px",borderTop: 1,borderBottom: 1,borderRight: 1,borderLeft: 1,borderColor: '#c2c2d6'}}>
        <Grid item xs={7} sx={{display:'flex',justifyContent:'space-between',borderColor:'#c2c2d6'}}>
        <Box>
        <Typography>Education</Typography>
          <Typography className={style.font_color}>High level</Typography>
          <Typography className={style.font_color} >i am a professional dev</Typography>
          <Typography className={style.font_color} >i am a professional dev</Typography>
        </Box>
        <Box>
        <Typography>Industry Certifications</Typography>
          <Typography className={style.font_color}>MERN STACK DEVELOPER FROM BMJ Industry</Typography>
          <Typography className={style.font_color}>MERN STACK DEVELOPER FROM BMJ Industry</Typography>
        </Box>
        </Grid>
        <Grid item xs={2} sx={{borderRight: 1,borderLeft: 1,borderColor:'#c2c2d6'}}>
        <Typography>Country of citizenship</Typography>
        <Typography className={style.font_color}  sx={{fontSize:'30px'}}>MEXICO</Typography>
        </Grid>
        <Grid item xs={3} sx={{borderColor:'#c2c2d6',display:'flex',justifyContent:'space-between'}} >
        <Box>
          <Typography >Technology</Typography>
          <Typography className={style.font_color}>Expert</Typography>
          <Typography className={style.font_color}>R</Typography>
        </Box>
        <Box>
        <Typography sx={{color:'white'}}>Technology</Typography>
          <Typography className={style.font_color}>Expert</Typography>
          <Typography className={style.font_color} sx={{fontSize:'30px'}}>SASS</Typography>
          
        </Box>
        </Grid>
      </Grid>
      {/* end of 1st section of description */}
      {/* 2nd sections start */}
      <Grid container spacing={2} sx={{mt:"1px",borderBottom: 1,borderRight: 1,borderLeft: 1, borderColor: '#c2c2d6'}}>
        <Grid item xs={3} >
        <Typography>Current level</Typography>
        <Typography sx={{color:' #c2c2d6',fontSize:'30px'}}>Associate level</Typography>
        </Grid>
        <Grid item xs={3} sx={{borderRight: 1,borderLeft: 1,borderColor:'#c2c2d6'}} >
        <Typography>Team average rating:</Typography>
        <Typography sx={{color:' #c2c2d6',fontSize:'30px'}} >97%</Typography>
        </Grid>
        <Grid item xs={3} >
        <Typography>Project completed</Typography>
        <Typography sx={{color:' #c2c2d6',fontSize:'30px'}} >17</Typography>
        </Grid>
        <Grid item xs={3} sx={{borderLeft: 1,borderColor:'#c2c2d6'}}>
        <Typography>Client rating</Typography>
        <Typography sx={{color:' #c2c2d6',fontSize:'30px'}} >92%</Typography>
        </Grid>
      </Grid>
      {/* end of second section */}
      <Grid container spacing={2} sx={{mt:"1px",borderBottom: 1,borderRight: 1,borderLeft: 1, borderColor: '#c2c2d6'}}>
        <Grid item xs={4} >
        <Typography>Year of professional experience:</Typography>
        {/* <Typography sx={{color:' #c2c2d6',fontSize:'30px'}}>Associate level</Typography> */}
        </Grid>
        <Grid item xs={4} sx={{borderRight: 1,borderLeft: 1,borderColor:'#c2c2d6'}} >
        <Typography>Vertical experience (years):</Typography>
        {/* <Typography sx={{color:' #c2c2d6',fontSize:'30px'}} >97%</Typography> */}
        </Grid>
        <Grid item xs={4} >
        <Typography>Previous organizations</Typography>
        {/* <Typography sx={{color:' #c2c2d6',fontSize:'30px'}} >17</Typography> */}
        </Grid>
        {/* <Grid item xs={3} sx={{borderLeft: 1,borderColor:'#c2c2d6'}}>
        <Typography>Client rating</Typography>
        <Typography sx={{color:' #c2c2d6',fontSize:'30px'}} >92%</Typography>
        </Grid> */}
      </Grid>
    </Container>
    
    {/* 2nd sections start */}
   
    

        </AccordionDetails>
      </Accordion>
    </div>
     {/* end  of Accordion */}
        </Grid>
        <Grid item xs={0}>
    
        </Grid>
      </Grid>
    </Container>
    <br/>
    {/* <Container maxWidth="lg" >
      <Grid container spacing={1} sx={{textAlign:'start'}}>
        <Grid item xs={2} sx={{display:'flex'}}>
        
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Box sx={{display:'flex',flexDirection:'column',ml:'10px'}}>
        <Box sx={{color:'#5cd6d6',fontWeight:'bolder'}} >Anil Taneja</Box>
        <Box sx={{color:'#c2c2d6',fontWeight:'bolder'}}>Maxico | Project Leader</Box>
        <Box sx={{color:'#666699'}}>view full profile</Box>
        </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={{fontWeight:'bolder'}}>Current level</Box>
          <Box sx={{color:'#c2c2d6',fontSize:'20px'}}>Associate</Box>
        </Grid>
        <Grid item xs={2}>
        <Box sx={{fontWeight:'bolder'}}>Client Rating</Box>
          <Box sx={{color:'#c2c2d6',fontSize:'20px'}}>92 %</Box>
        </Grid>
        <Grid item xs={2}>
        <Box sx={{fontWeight:'bolder'}}>Project completed</Box>
          <Box sx={{color:'#c2c2d6',fontSize:'20px'}}>17</Box>
        </Grid>
        <Grid item xs={2}>
        <Box sx={{fontWeight:'bolder'}}>Years of professional experience</Box>
          <Box sx={{color:'#c2c2d6',fontSize:'20px'}}>20</Box>
        </Grid>
      </Grid>
    </Container> */}

    {/* start of second Accordion */}
    {/* <Container maxWidth="lg">
      <Grid container spacing={2} >
        <Grid item xs={7} sx={{display:'flex',justifyContent:'space-between',border: 1,borderColor:'#c2c2d6'}}>
        <Box>
        <Typography>Education</Typography>
          <Typography className={style.font_color}>High level</Typography>
          <Typography className={style.font_color} >i am a professional dev</Typography>
          <Typography className={style.font_color} >i am a professional dev</Typography>
        </Box>
        <Box>
        <Typography>Industry Certifications</Typography>
          <Typography className={style.font_color}>MERN STACK DEVELOPER FROM BMJ Industry</Typography>
          <Typography className={style.font_color}>MERN STACK DEVELOPER FROM BMJ Industry</Typography>
        </Box>
        </Grid>
        <Grid item xs={2} sx={{border: 1,borderColor:'#c2c2d6'}}>
        <Typography>Country of citizenship</Typography>
        <Typography className={style.font_color}  sx={{fontSize:'30px'}}>MEXICO</Typography>
        </Grid>
        <Grid item xs={3} sx={{border: 1,borderColor:'#c2c2d6',display:'flex',justifyContent:'space-between'}} >
        <Box>
          <Typography >Technology</Typography>
          <Typography className={style.font_color}>Expert</Typography>
          <Typography className={style.font_color}>R</Typography>
        </Box>
        <Box>
        <Typography sx={{color:'white'}}>Technology</Typography>
          <Typography className={style.font_color}>Expert</Typography>
          <Typography className={style.font_color} sx={{fontSize:'30px'}}>SASS</Typography>
          
        </Box>
        </Grid>
      </Grid>
    </Container> */}
    {/* <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={3} className={style.bordr_class}>
        <Typography>Current level</Typography>
        <Typography sx={{color:' #c2c2d6',fontSize:'30px'}}>Associate level</Typography>
        </Grid>
        <Grid item xs={3} className={style.bordr_class}>
        <Typography>Team average rating:</Typography>
        <Typography sx={{color:' #c2c2d6',fontSize:'30px'}} >97%</Typography>
        </Grid>
        <Grid item xs={3} className={style.bordr_class}>
        <Typography>Project completed</Typography>
        <Typography sx={{color:' #c2c2d6',fontSize:'30px'}} >17</Typography>
        </Grid>
        <Grid item xs={3} className={style.bordr_class}>
        <Typography>Client rating</Typography>
        <Typography sx={{color:' #c2c2d6',fontSize:'30px'}} >92%</Typography>
        </Grid>
      </Grid>
    </Container> */}
  
    </>
   
  );
}
