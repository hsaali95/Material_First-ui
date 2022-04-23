import React, { useState } from 'react'
import SideNav from '../NavTabs/SideNav'
import Navbar from './navbar'
import { Switch,Route } from 'react-router-dom'
import DashBoard from '../BodyComponent/Dash_board/DashBoard'
import BlogComponent from '../BodyComponent/BlogComponent'
import Link from '../BodyComponent/Link'
import Notification from '../BodyComponent/Notifications'
import Logout from '../BodyComponent/LogOut'
import { Box } from '@mui/system'
import { useStyles } from './HeaderStyles'

const HeaderComponent = () => {
  const classes = useStyles()
  // flowing data from parent component to child 
  const [mobileOpen,SetmobileOpen] = useState(false)
    const handleDrawerOpen = ()=>{
        SetmobileOpen(!mobileOpen)
    } 
    const handleDrawerClose = ()=>{
      SetmobileOpen(false)
  } 
  return (
    <div>
    {/* passing props to navbar and sidenav */}
        <Navbar handleDrawerOpen={handleDrawerOpen}/>
        <SideNav 
        mobileOpen={mobileOpen} 
        handleDrawerOpen={handleDrawerOpen} 
        handleDrawerClose={handleDrawerClose}  
        />
        <Box className={classes.wrapper}>
        <Switch>
        {/* aese bhi kar sakte han  */}
        {/* <Route to='/' component={<DashBoard/>} /> */}
        
          <Route exact path='/blog' render={()=> <BlogComponent/>}/>
          <Route exact path='/link1' render={() =>  <Link />}/>
          <Route exact path='/notification' render={()=> <Notification />}/>
          <Route exact path='/logout' render={()=> <Logout />}/>
          <Route exact to='/' render={()=> <DashBoard />}/>
          
        </Switch>
        </Box>
       
        
    </div>
  )
}

export default HeaderComponent