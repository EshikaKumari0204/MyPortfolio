import React from 'react'
import profile_pic from "../../assets/profile2.jpeg"
import "./Hero.css"
import AnchorLink from "react-anchor-link-smooth-scroll"
const Hero = () => {
  return (
    <div class="hero-section">
      <img src={profile_pic} alt="" />
      <h1><span>I'm Eshika Kumari </span>, Web Developer crafting intuitive web experience.</h1>
      <p>I am a Computer Science student exploring Full Stack Development building clean and responsive user-friendly interface</p>
      <div className="herobuttons">
        <div className="connectwithme">  <a
    href="https://www.linkedin.com/in/eshika-kumari"
    target="_blank"
    rel="noopener noreferrer"
    className="anchor-links"
  >
    LinkedIn
  </a></div>
        <div className="resume" onClick={()=>window.open('/Resume.pdf','_blank')}>My Resume</div>
      </div>
    </div>
  )
}

export default Hero
