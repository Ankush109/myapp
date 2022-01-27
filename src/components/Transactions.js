import React from 'react';
import "../transaction.css"
function Transactions({title,type,money}) {
  return <div>
      <div className='row'>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                <h2>{type}</h2>
            </div>
            <div>
                <h2>{money}</h2>
            </div>
      </div>
  </div>;
}

export default Transactions;

