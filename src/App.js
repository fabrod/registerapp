
import React from 'react';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from './Container/Registration';
import Home from './Container/Home';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='/home' element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
  
  
}

export default App;
