// About.js
import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Header from './Header';
import './About.css';
import DSlogo from './images/DSlogo.png';

const About = () => {
  useEffect(() => {
    // Apply specific styling when the About page mounts
    document.body.classList.add('about-page-background');

    // Cleanup when the component unmounts
    return () => {
      document.body.classList.remove('about-page-background');
    };
  }, []);

  return (
    <div>
      <Header />

      <div className='cinfo'>
        <h1 className='aboutpageh1'>About Us</h1>
        <ul className='navbar'>
          <li className="content-box">testing</li>
          <li>resting again</li>
          <li>testing3</li>
        </ul>
        <NavLink to="/Library" activeClassName="active">
          <button className='libraryButton'>More info on bikes</button>
        </NavLink>
      </div>

      <div className='widget'>
        <div className='content1'>
          <img src={DSlogo} alt="" />
          test
          test <br />
          test
          test
          test
        </div>
        <div className='content2'>
          <img src={DSlogo} alt="" />
          test
        </div>
      </div>
    </div>
  );
};

export default About;
