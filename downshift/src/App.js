// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welc from './Welc';
import About from './About';
import Header from './Header'
import Library from './Library';

const App = () => {
  return (
    
    <Router>
      
      <Routes>
        <Route path="/" element={<Welc />} />
        
        <Route path="/about" element={<><About /></>} />

        <Route path="/Library" element={<><Library /></>} /> 

        <Route path="/*" element={<Navigate to="/" />} />
        
      </Routes>
    </Router>
  );
};

export default App;
