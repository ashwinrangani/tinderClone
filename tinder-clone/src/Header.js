import React from 'react'
import "./header.css"
import PersonIcon from '@mui/icons-material/Person'
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function header() {
  return (
    <div className='header'>
<IconButton>
<PersonIcon fontSize='large' className='header_icon'  />
</IconButton>
<img className='header_logo'
 src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-700x394.png"
 alt='logo'>
   </img>
   <IconButton>
   <ForumIcon fontSize='large' className='header_icon' />
   </IconButton>
    </div>
  )
}

export default header