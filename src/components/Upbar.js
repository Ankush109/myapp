import React from 'react';
import "../upbar.css"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar } from '@mui/material';

function Upbar(props) {
  return <div className='topbar'>
    <div className='header'>
  <h1> Dashboard</h1>
    </div>
  < div className='right-input'>



<input  type="text" placeholder="Search.."/>

<div className='icons'>
  <div className='search'>
  <SearchIcon/>
  </div>
  <div className='notify'>
  <NotificationsNoneIcon/>
  </div>
  <div className='avatar'>
  <Avatar/>
  </div>


</div>

</div>


  </div>;
}

export default Upbar;
