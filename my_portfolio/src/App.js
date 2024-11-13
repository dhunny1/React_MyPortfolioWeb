import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './Components/Footer.js';
import HeroSection from './Pages/HomePage.js';
import SideBar from './Components/sidebar.js';

import HomePage from './Pages/HomePage.js';
import AboutPage from './Pages/AboutPage.js';
import ProjectsPage from './Pages/ProjectsPage.js';
import ContactPage from './Pages/ContactPage.js';
import BlogPage from './Pages/BlogPage.js';





function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='SBar' id="outer-container">
          <SideBar />
        </div>
        <div className='herosec'>
          <Routes>
            
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage/>} />
            <Route path="/blog" element={<BlogPage/>} />         
            
            <Route path="/contact" element={<ContactPage/>} />

          </Routes>
        </div>
          
          
        
        
        <div className='footer'><Footer /> </div>

          
      </div>
    </BrowserRouter>
  );
}

export default App;
