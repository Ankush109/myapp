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
      </div>
      <div className='leftbar'>
        <Leftbar/>
      </div>
      </div>
      
    
  </div>;
}

export default Hompage;
