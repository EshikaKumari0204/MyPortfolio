import React from 'react';
import profile_pic from '../../assets/profilepic2.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section reveal-on-scroll">
      <div className="hero-avatar-wrapper">
        <img
          src={profile_pic}
          alt="Eshika Kumari"
          className="hero-avatar"
        />
      </div>
      <h1>
        <span>I'm Eshika Kumari</span>, Web Developer crafting intuitive web experience.
      </h1>
      <p className="hero-description">
        I am a Computer Science student exploring Full Stack Development building clean and responsive user-friendly interface
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
          onClick={() => window.open('/EshikaKumari_Resume.pdf', '_blank')}
        >
          My Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
