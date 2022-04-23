import { AppBar, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react'
import { Box } from '@mui/system';
import Profile from '../NavTabs/Profile';
import Notification from '../NavTabs/Notification';
import { useStyles } from './HeaderStyles';
import Messages from '../NavTabs/Messages';
import Hidden from '@mui/material/Hidden';




const Navbar = ({handleDrawerOpen}) => {
    const classes = useStyles()
 
  return (
    <AppBar position="static">
    <Toolbar>
      
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={classes.logo}>
        {"<Admin pannel>"}
      </Typography>
      {/* hiding at 900px */}
      <Hidden mdDown>
      <Box sx={{display:"flex"}}>
        <Profile/>
        <Notification/>
        <Messages/>
      </Box>
      </Hidden>
      {/* showing at 600px */}
      <Hidden mdUp>
      <IconButton color="inherit"
      onClick={handleDrawerOpen}
      >
        <MenuIcon />
      </IconButton>
      </Hidden>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar