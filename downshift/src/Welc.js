import React from 'react';
import About from './About';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './Welc.css';

function Welc() {
  return (
    <div>
      {/* <Router> */}
        <h1>Welcome to Downshift</h1>
        <NavLink to="About" activeClassName="active" className='welcbutton'>
         <button >click me to enter</button>
        </NavLink>
        <p>a unique experience to learning about bikes and bikers, made to share the passion and understanding of sharing the road in</p>
       
        
        {/* <Routes>
          <Route path='/About' element={<About />} />
        </Routes>
      </Router> */}
    </div>
  )
}

export default Welc
