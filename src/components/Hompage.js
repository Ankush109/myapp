import React from 'react';
import "../homepage.css"
import Charts from './Charts';
import { userData } from '../dummydata';
import Leftbar from './Rightbar';
import Upbar from './Upbar';



function Hompage() {
  return <div className='home'>
<div className='upbar'>
  <Upbar/>
</div>
 

   <div className='contents'>

  
      <div className='charts'>
      <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className='cont'>
       <div>
         <h1>
           Last Transactions
         </h1>
       </div>
       <div className='row1'>
         <h2>Amazon</h2>
         <h3>shopping</h3>
         <h2>$1,480</h2>
       </div>
       <div className='row1'>
         <h2>Youtube </h2>
         <h3>Subscription</h3>
         <h2>$330</h2>
       </div>
       <div className='row1'>
         <h2>Github</h2>
         <h3>Development</h3>
         <h2>$2,280</h2>
       </div>
       <div className='row1'>
         <h2>Apple </h2>
         <h3>shopping</h3>
         <h2>$69</h2>
       </div>
     </div>
      </div>
      <div className='leftbar'>
        <Leftbar/>
      </div>
 
      </div>
   
    
  </div>;
}

export default Hompage;
