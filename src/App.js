import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fontsource/kablammo';       // Kablammo font
import '@fontsource/lovers-quarrel'; 
import Homep from "./pages/Homep"
import Aboutp from './pages/Aboutp';
import Contactp from './pages/Contactp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';
import Galleryp from './pages/Galleryp';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homep />} />
        <Route path="/about" element={<Aboutp />} />
        <Route path="/contact" element={<Contactp />} />
        <Route path="/gallery" element={<Galleryp />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
