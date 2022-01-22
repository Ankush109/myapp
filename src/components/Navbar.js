import React from 'react';
import { Link } from 'react-router-dom';
import "../navbar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Navbar() {
  return <div className='navbar'>
      <div className='nav-heading'>
        <h1>OLAYA</h1>
      </div>
      <div className='nav-items'>
        <div className='dashboard'>
          <div className='icon'>
          <DashboardIcon/>
          </div>
       <div className='d'>
       <Link to="/" className='l'>
            <h2>Dashboard</h2>
           </Link> 
        </div>
       </div>
       <div className='dashboard'>
          <div className='icon' >
          <AccountBalanceWalletIcon/>
          </div>
       <div className='d'>
       <Link to="/wallet" className='l'>
            <h2>Wallet</h2>
           </Link> 
        </div>
       </div>
       <div className='dashboard'>
          <div className='icon'>
          <DonutSmallIcon/>
          </div>
       <div className='d'>
       <Link to="/statistics" className='l'>
            <h2>Statistics</h2>
           </Link> 
        </div>
       </div>
       
       <div className='dashboard'>
          <div className='icon'>
          <MessageIcon/>
          </div>
       <div className='d'>
       <Link to="/message" className='l'>
            <h2>Message</h2>
           </Link> 
        </div>
       </div>
       <div className='dashboard'>
          <div className='icon'>
          <AccountCircleIcon />
          </div>
       <div className='d'>
       <Link to="/profile" className='l'>
            <h2>Profile</h2>
           </Link> 
        </div>
       </div>

      </div>
  </div>;
}

export default Navbar;
