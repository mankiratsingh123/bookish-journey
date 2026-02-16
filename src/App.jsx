import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="nav-logo">Mr Singh</div>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      
      <Hero />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;
