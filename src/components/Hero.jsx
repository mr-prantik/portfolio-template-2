import React from 'react';
import './Hero.css';


const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="about" className="hero">
      <div className="hero-left">
        <h1>UX design & accessibility</h1>
        <p>Hi, I'm Prantik Mahata. I’m a developer specialising in digital accessibility.</p>
        <div className="info-row">
          <div>
            <h4>Currently</h4>
            <p>Backend, Photoshop</p>
          </div>
          <div>
            <h4>Location</h4>
            <p>India</p>
          </div>
        </div>
        <button onClick={scrollToProjects}>About me</button>
      </div>
      <div className="hero-image">
        <img src="/assets/hero.png" alt="Tamara Sredojevic speaking" />
      </div>
    </header>
  );
};

export default Hero;
