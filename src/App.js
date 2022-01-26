import React from 'react';
import './App.css';
import Hompage from './components/Hompage';
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Wallet from './components/Wallet';
import Navbar from './components/Navbar';
import Statistics from './components/Statistics';
import Message from './components/Message';
import Profile from './components/Profile';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
      <div className='navabar'> 
      <Navbar/>
      </div>
    
      <div className='routes'>
      <Routes>
   
   <Route path="/" element={<Hompage/>}/>

<Route path="/wallet" element={<Wallet/>}/>
<Route path="/statistics" element={<Statistics/>}/>
<Route path="/message" element={<Message/>}/>
<Route path="/profile" element={<Profile/>}/>

   



 </Routes>

      </div>
  
    </div>
    </BrowserRouter>
    
  );
}

export default App;
