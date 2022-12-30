import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Blog } from './pages/Blog';
import { Home } from './pages/Home';
import Navbar from './pages/Navbar';
import './App.css';
import Appx from './Appx';
import AppCT from './Components.cn/AppCT';
import Project from './componant/Project.js';






function App() {
  return (
   
  <div>
   
    <div >
         
    <BrowserRouter>
   
    <div className='menu'>
    <Navbar/>
 


 
   
  

    </div>
  
     
     <div className='container'>
     
     

     <Routes>
    
   <Route path='/' element={<Home/>} />
   <Route path='/blog' element={<Project/>} />
   <Route path='/about' element={<AppCT/>} />
   <Route path='/product' element={<Appx/>} />


    </Routes>
  

     </div>
  
    
 
    </BrowserRouter>
    

    </div>
   
  </div>
  
   
  );

}

export default App