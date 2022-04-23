import * as React from "react";

import { Box, Paper, Grid, Typography,Container } from "@mui/material";


export default function TextSections() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={0}>
        
        </Grid>
        <Grid item xs={12}>
            <Typography variant="body1" component="p" sx={{mt:'50px',fontWeight:'bolder',color:'#bbbb77',fontSize:'20px'}}>Welcome here's an overview of<br/>your team options....</Typography>
            <Typography variant="body1" component="p" sx={{mt:'20px',fontWeight:'bolder',color:'#bbbb77',fontSize:'20px'}}>The Team</Typography>

        </Grid>
        <Grid item xs={0}>
    
        </Grid>
      </Grid>
    </Container>
  );
}
