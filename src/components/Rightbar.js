import React from 'react';
import "../rightbar.css"
function Leftbar() {
  return <div className='rightbar'>
      <div className='header'>
          <h1>Cards</h1>
          </div>
          <div className='card-pic'> 
          <img width="470px" src="https://i.pinimg.com/564x/4a/71/1e/4a711ee02922b97a39d9c1e56a3189f2--black-card-credit-cards.jpg"/>
          </div>
          <div className='current_balance'>
            <div className='header'>
              <h4>
                Current Balance
              </h4>
              </div>
              <div className='money'>
           
                <h2>
                  $2,850.75 
                </h2>
                
              </div>
           
          </div>
          <div className='upgrade'>
            <div className='header'>
              <h2>
                Upgrade to Pro
              </h2>
              </div>
              <div className='but'>
                <button>
                  Get Now
                </button>
              </div>
          
          </div>
      
  </div>;
}

export default Leftbar;
