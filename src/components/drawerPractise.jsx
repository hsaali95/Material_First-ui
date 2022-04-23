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
import { bgcolor, textAlign } from '@mui/system';
import style from './style.module.css'
import ThorLogo from '../avatarimages/ThorLogo.png'
import Avatar from '@mui/material/Avatar';


const drawerWidth = 240
const useStyles = makeStyles((theme)=>{
    return{
        page:{
            background:'#f9f9f9',
            width:'100%',
            padding:theme.spacing(3)
        },
        drawer:{
            width:drawerWidth 
        },
        drawerPaper:{
            width:drawerWidth ,
            background:'#001a33 !important'
        },
        root:{
            display:'flex'
        },
        active:{
            background:'#668cff',
            borderRadius:"20px",
            
        },
        title:{
            textAlign:'center'
        },
        appbar:{
            width:`calc(100% - ${drawerWidth}px) !important`,
            backgroundColor:'#003399 !important',
            color:'black !important'
            // textAlign:'center !important'
            
        },
        toolbar:theme.mixins.toolbar
    }
})

export default function PermanentDrawerLeft({ children }) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const menuItems = [
        {
            text:'Create Note',
            icon:<AddAlarmOutlined color='secondary'/>,
            path:'/'
        },
        {
            text:'munna',
            icon:<AddAlarmOutlined color='secondary'/>,
            path:'/ContactPage'
        },
       
    ]
  return (
   
   <div className={classes.root}>
  {/* //main app bar  */}
  <AppBar 
  className={classes.appbar}
//   it reduces the shadow elevation
  elevation={0}
  
  >
      <Toolbar>
      <Typography>  
      <img src={ThorLogo} width='400px' height='80px' sx={{mt:'5px'}}/>
         </Typography>
      </Toolbar>
  </AppBar>
   <Drawer
   className={classes.drawer}
   variant="permanent"
   anchor='left'
   
//    changing by default width of paper
   classes={{paper:classes.drawerPaper}}
   >
       <div >
           <Typography variant='h5' className={classes.title} sx={{mt:'10px'}}>
            Ahmed notes
           </Typography>
       </div>
      <List>
      {menuItems.map((item)=>{ 
        return(
            <ListItem 
            key={item.text}
            onClick={()=>history.push(item.path)}
            className={location.pathname == item.path ? classes.active :null }
            >
            <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}/>
          </ListItem>
        )
      })}   
      </List> 
   </Drawer>
       <div className={classes.page}>
       {/* create gap between appbar and content below  */}
       <div className={classes.toolbar}></div>
         {children}
       </div>
   </div>
   
  );
}
