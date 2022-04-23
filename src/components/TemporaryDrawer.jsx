import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { AddAlarmOutlined } from '@mui/icons-material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon';
import {useHistory,useLocation} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { bgcolor, display, textAlign } from '@mui/system';
import style from './style.module.css'
import ThorLogo from '../avatarimages/ThorLogo.png'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';

 const TemporaryDrawer = () => {
     const [open,setOpen] = useState(false)
   return (
     <div>
         <Box sx={{border:1,width:'100px',height:'100vh',bgcolor:'blue'}}>
         <IconButton
         edge="end"
         color="inherit"
         aria-label='open drawer'
         onClick={()=>{setOpen(true)}}
         >
          <MenuIcon />
         </IconButton>
         </Box>
         <SwipeableDrawer
         anchor='left'
         sx={{position:'absolute',marginLeft:'125px !important',bgcolor:"red"}}
         open={open}
         onClose={()=>{setOpen(false)}}
         onOpen={()=>{}}
         variant="temporary"
         >
         <Box sx={{bgcolor:'yellow'}}>
             <Box textAlign='center' p={2} >components</Box>
             {/* <Divider/> */}
             <List>
                 <ListItem>
                     <ListItemText primary="ahmed" />
                 </ListItem>
             </List>
         </Box>
         </SwipeableDrawer>
     </div>
   )
 }
 
 export default TemporaryDrawer