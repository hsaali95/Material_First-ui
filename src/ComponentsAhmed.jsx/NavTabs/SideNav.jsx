import { Drawer, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useStyles } from '../Header/HeaderStyles'
import SideNavData from './SideNavData';

const drawerWidth = 240;

const SideNav = ({mobileOpen,handleDrawerOpen,handleDrawerClose}) => {
  const classes = useStyles()
  return (
    <Box
    component="nav"
    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
    aria-label="mailbox folders"
    className={classes.drawer}
  >
    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
    <Drawer
      variant="temporary"
      anchor={'left'}
      open={mobileOpen}
      onClose={handleDrawerOpen}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
      classes={{paper:classes.drawerPaper}}
    >
      <SideNavData handleDrawerClose={handleDrawerClose} />
    </Drawer>
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,top:'65px' },
      }}
      open
    >
      <SideNavData handleDrawerClose={handleDrawerClose} />
    </Drawer>
  </Box>
  )
}

export default SideNav
