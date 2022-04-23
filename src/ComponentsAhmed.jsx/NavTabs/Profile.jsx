import { Avatar, Button,  ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { Box } from '@mui/system'
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Male_Avatar from '../images/Male-Avatar.png'
import React, { useState } from 'react'

const Profile = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropDownData = [
      {label:'settings',icon:<LoginIcon/>},
      {label:'settings',icon:<VpnKeyIcon/>},

  ]
  return (
   <Box>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={<Avatar alt="Remy Sharp" src={Male_Avatar} />}
      >
       
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      {
        dropDownData.map((value,index)=>
        <MenuItem LinkComponent={ListItem} onClick={handleClose} key={Math.random()} >
            <ListItemIcon>{value.icon}</ListItemIcon>
            <ListItemText>{value.label}</ListItemText>
        </MenuItem>
        )
      }
        
       
      </Menu>
   </Box>
  )
}

export default Profile