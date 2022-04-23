import { Avatar, Badge, Button,  IconButton,  List,  ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useStyles } from '../Header/HeaderStyles';
import EmailIcon from '@mui/icons-material/Email';

const Messages = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles()

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropDownData = [
      {label:'settings',description:"I like your post"},
      {label:'settings',description:"I like your post"},

  ]
  return (
   <Box>
        <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
      >
       <Badge badgeContent={4} color="secondary">
            <EmailIcon/>
       </Badge>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      <List className={classes.navList}>
      {
        dropDownData.map((value,index)=>
        
        <ListItem  onClick={handleClose} key={Math.random()} >
            <ListItemIcon>
                <Avatar sx={{background:'blue'}}>{value.label[0].toUpperCase()}</Avatar>
            </ListItemIcon>
            <ListItemText 
            primary={value.label}
            secondary={value.description}
            />
        
        </ListItem>
        )
      }
      </List>  
       
      </Menu>
   </Box>
  )
}

export default Messages