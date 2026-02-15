import React from 'react'
import profile_pic from "../../assets/profile2.jpeg"
import "./Hero.css"
import AnchorLink from "react-anchor-link-smooth-scroll"
const Hero = () => {
  return (
    <div class="hero-section">
      <img src={profile_pic} alt="" />
      <h1><span>I'm Eshika Kumari </span>, Frontend Developer crafting intuitive web experience.</h1>
      <p>I am a Computer Science student exploring Frontend Development building clean and responsive user-friendly interface</p>
      <div className="herobuttons">
        <div className="connectwithme"><AnchorLink className="anchor-links" offset={50} href="#contact">Connect with me </AnchorLink></div>
        <div className="resume" onClick={()=>window.open('/2406060_Eshika_CSE.pdf','_blank')}>My Resume</div>
      </div>
    </div>
  )
}

export default Hero
