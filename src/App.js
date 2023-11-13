import Home from './pages/Home';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {

  return (
    
  
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
 
      </Routes>
      
    </div>
  );
}

export default App;
