import React from 'react';
import "../homepage.css"
import Charts from './Charts';
import { userData } from '../dummydata';
import Leftbar from './Rightbar';
import Upbar from './Upbar';

import Transactions from './Transactions';


function Hompage() {
  return <div className='home'>
<div className='upbar'>
  <Upbar/>
</div>
 

   <div className='contents'>

  
      <div className='charts'>
      <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className='transactions'>
        <div>
          <h1>Last Transactions</h1>
        </div>
        <div className='items'>

      
      <Transactions title="Amazon" money="$69" type="Shopping"/>
      <Transactions title="Youtube " money="$69" type="subsrciption"/>
      <Transactions title="Github" money="$69" type="Development"/>
      <Transactions title="Flipkart" money="$69" type="subsrciption"/>
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
