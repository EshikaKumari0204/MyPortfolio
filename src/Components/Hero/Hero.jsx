import React from 'react';
import profile_pic from '../../assets/profilepic2.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section reveal-on-scroll">
      <div className="hero-avatar-wrapper">
        <div className="hero-avatar-frame">
          <img
            src={profile_pic}
            alt="Eshika Kumari"
            className="hero-avatar"
          />
        </div>
      </div>
      <h1>
        <span>I'm Eshika</span>, Full Stack Web Developer crafting intuitive web experience.
      </h1>
      <p className="hero-description">
        Developer by skill, problem solver by nature, curious about everything 
      </p>
      <div className="herobuttons">
        <a
          href="https://www.linkedin.com/in/eshika-kumari"
          target="_blank"
          rel="noopener noreferrer"
          className="connectwithme"
        >
          LinkedIn
        </a>
        <button
          type="button"
          className="resume"
          onClick={() => window.open('/ResumeEshikaKumari.pdf', '_blank')}
        >
          My Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
