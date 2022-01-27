import { Avatar } from '@mui/material';
import React from 'react';
import "../rightbar.css"
import AddIcon from '@mui/icons-material/Add';

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
          <div className='quick_send'>
            <div className='header'>
            <h1>
            Quick Send
            </h1>
            </div>
            
            <div className='avatar'>

              <div>
                <Avatar src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-1/p320x320/260182699_3018403018424384_5937015261685118306_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=DAJHfuzRpc8AX8lRXQZ&_nc_ht=scontent.fccu3-1.fna&oh=00_AT-2z3vmMu7LlsXXhjzkM2shqJKsCLIC-5tOZfxTVySkww&oe=61F71CB2"/>
              </div>
              <div>
                <Avatar src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-1/p320x320/260182699_3018403018424384_5937015261685118306_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=DAJHfuzRpc8AX8lRXQZ&_nc_ht=scontent.fccu3-1.fna&oh=00_AT-2z3vmMu7LlsXXhjzkM2shqJKsCLIC-5tOZfxTVySkww&oe=61F71CB2"/>
              </div>
              <div>
                <Avatar src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-1/p320x320/260182699_3018403018424384_5937015261685118306_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=DAJHfuzRpc8AX8lRXQZ&_nc_ht=scontent.fccu3-1.fna&oh=00_AT-2z3vmMu7LlsXXhjzkM2shqJKsCLIC-5tOZfxTVySkww&oe=61F71CB2"/>
              </div>
              <div>
                <Avatar src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-1/p320x320/260182699_3018403018424384_5937015261685118306_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=DAJHfuzRpc8AX8lRXQZ&_nc_ht=scontent.fccu3-1.fna&oh=00_AT-2z3vmMu7LlsXXhjzkM2shqJKsCLIC-5tOZfxTVySkww&oe=61F71CB2"/>
              </div>
              <div>
                <Avatar src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-1/p320x320/260182699_3018403018424384_5937015261685118306_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=DAJHfuzRpc8AX8lRXQZ&_nc_ht=scontent.fccu3-1.fna&oh=00_AT-2z3vmMu7LlsXXhjzkM2shqJKsCLIC-5tOZfxTVySkww&oe=61F71CB2"/>
              </div>
              <div>
                <AddIcon/>
              </div>
              
              <div>
                
              </div>

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
