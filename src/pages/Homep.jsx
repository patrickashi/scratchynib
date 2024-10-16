import React from 'react';
import '../index.css';
import Sectwo from '../components/Sectwo';
import Secone from '../components/Secone';
import Feedback from '../components/Feedback';
import Testimonies from '../components/Testimonies';
import About from '../components/About';

const Homep = () => {
  return (
    <div>
        <Secone />
        <Sectwo />
        <Testimonies />
        <About />
        <Feedback />
    </div>
  );
}

export default Homep;
