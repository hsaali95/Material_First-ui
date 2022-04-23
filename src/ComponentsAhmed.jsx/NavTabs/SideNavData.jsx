import { Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'


import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PostAddIcon from '@mui/icons-material/PostAdd';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { NavLink } from 'react-router-dom';
import { useStyles } from '../Header/HeaderStyles'

const SideNavData = ({handleDrawerClose}) => {
  const classes = useStyles()
    const ListItenData = [
        {label:'Dashboard',icon:<DashboardIcon/>,link:'/'},
        {label:'Menu',icon:<MenuBookIcon/>,link:'/blog'},
        {label:'Post',icon:<PostAddIcon/>,link:'/link1'},
        {label:'Notification',icon:<NotificationsActiveIcon/>,link:'/notification'},
        {label:'Exit',icon:<ExitToAppIcon/>,link:'/logout'},
    ]
  return (
    <List>
    
    {
        ListItenData.map((value)=>(
        <Button size='small' className={classes.NavButton} key={Math.random()} onClick={()=>handleDrawerClose()}>
          <ListItem exact component={NavLink} to={value.link} className={classes.navlinks} activeClassName={classes.activeNaveLinks} key={Math.random()}>
            <ListItemIcon>{value.icon}</ListItemIcon>
            <ListItemText>{value.label}</ListItemText>
          </ListItem>
        </Button>
        ))
    }
       
    </List>
    
  )
}

export default SideNavData