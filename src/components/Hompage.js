import React from 'react';
import "../homepage.css"
import Charts from './Charts';
import { userData } from '../dummydata';

function Hompage() {
  return <div className='home'>
      <h1>
          content
      </h1>
     <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
  </div>;
}

export default Hompage;
