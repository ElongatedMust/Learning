import React from 'react';
import About from './About';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './Welc.css';


function Welc() {
  return (
    <div>
      
        <div className="background-container" style={{ backgroundImage: `url(/images/smooth.jpg)` }}>

            <div className="txt">
              <p className="txt1">Welcome to</p>
              <p className="txt2">DownShift</p>
            </div>

        <NavLink to="About" activeClassName="active" className='welcbutton'>
          <img src='/images/start.png' alt="" />
        </NavLink>

        <p>a unique experience to learning about bikes and bikers, made to share the passion and understanding of sharing the road in</p>
        
        </div>
        
       
    </div>
  )
}

export default Welc
