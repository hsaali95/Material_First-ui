import React from 'react'
import { Box, Paper, Grid, Typography,Container, Button } from "@mui/material";
import style from './style.module.css'
const OverviewGrid = () => {
  return (
    <>
    <Container maxWidth="lg" > 
    {/* 1st section */}
      <Grid container spacing={2} sx={{borderBottom: 1}}>
      <Typography variant='h4' component="h2">Overview</Typography>
      </Grid>
      {/* 2nd section */}
      <Grid container spacing={2} sx={{borderBottom: 1,mt:'1px'}}>
      <Grid item xs={4}>
    <Typography >Project</Typography>
    <Typography variant='h4' component="h2" className={style.font_color}>Strategy Development</Typography>
    </Grid>
    <Grid item xs={4} sx={{borderRight: 1,borderLeft: 1}}>
    <Typography>Company</Typography>
    <Typography variant='h4' component="h2" className={style.font_color}>AstraZeneca</Typography>
    </Grid>
    <Grid item xs={4}>
    <Typography>Business Function</Typography>
    <Typography variant='h4' component="h2" className={style.font_color}>Finance</Typography>
    </Grid>
      </Grid>
      {/* 3rd section */}
      <Grid container spacing={2} sx={{borderBottom: 1,mt:'1px'}}>
      <Grid item xs={12}>
      <Typography variant='body1' component="p">Project brief</Typography>
      <Typography variant='body2' component="p" sx={{color:'#c2c2d6'}}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography>
    </Grid>
    </Grid>
    {/* 4rth section */}
    <Grid container spacing={2} sx={{borderBottom: 1 ,mt:'1px'}}>
      <Grid item xs={3}>
      <Typography variant='body1' component="p">Start Date</Typography>
      <Typography variant='h4' component="h2" className={style.font_color}>00/00/2021</Typography>
    </Grid>
    <Grid item xs={3} sx={{borderRight: 1,borderLeft: 1}}>
    <Typography variant='body1' component="p" >End Date</Typography>
      <Typography variant='h4' component="h2" className={style.font_color}>00/00/2021</Typography>
    </Grid>
    <Grid item xs={3}>
    <Typography variant='body1' component="p">Team members</Typography>
      <Typography variant='h4' component="h2" className={style.font_color}>5</Typography>
    </Grid>
    <Grid item xs={3} sx={{borderRight: 1,borderLeft: 1}}>
    <Typography variant='body1' component="p">Balance Expert Team Score:</Typography>
      <Typography variant='h4' component="h2" className={style.font_color}>98%</Typography>
    </Grid>
    </Grid>
    {/* 4rth section */}
    <Grid container spacing={2} sx={{borderBottom: 1,mt:'1px'}}>
      <Grid item xs={4}>
    <Typography >Project</Typography>
    <Typography variant='h4' component="h2" className={style.font_color}>Strategy Development</Typography>
    </Grid>
    <Grid item xs={4} sx={{borderRight: 1,borderLeft: 1}}>
    <Typography>Company</Typography>
    <Typography variant='h4' component="h2" className={style.font_color}>AstraZeneca</Typography>
    </Grid>
    <Grid item xs={4}>
    <Typography>Business Function</Typography>
    <Typography variant='h4' component="h2" className={style.font_color}>Finance</Typography>
    </Grid>
      </Grid>
      {/* 5th section */}
      <Grid container spacing={2} sx={{borderBottom: 1,mt:'1px'}}>
      <Grid item xs={12}>
    <Typography>Additional Language Requirements:</Typography>
    <Typography variant='h4' component="h2" className={style.font_color}>Spanish, Mandrain(Chinese) & Hindi</Typography>
    </Grid>
      </Grid>
      {/* 6th sections */}
      <Grid container spacing={2} sx={{mt:'50px'}}>
      <Grid item xs={12}>
    <Button className={style.confirm_button}>Confirm</Button>
    </Grid>
      </Grid>
    </Container>
    </>
  )
}

export default OverviewGrid