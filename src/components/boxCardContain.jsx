import { Box } from '@mui/system'
import React from 'react'
import Boxcard from '../Boxcard'
import Grid from '@mui/material/Grid';


const boxCardContain = () => {
  return (
    <Grid  container rowSpacing={{ md:2,xs:2}}  columnSpacing={{lg:3,xl:2}}>
    <Grid item lg={4}  md={6} xs={12} sm={12}>
      <Boxcard/>
    </Grid>
    <Grid item lg={4}  md={6} xs={12} sm={12}>
      <Boxcard/>
    </Grid>
    <Grid item lg={4}  md={6} xs={12} sm={12}>
      <Boxcard/>
    </Grid>
  </Grid>
  )
}

export default boxCardContain