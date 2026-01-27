import React from 'react'
import "./About.css"
import profile_pic from "../../assets/profile2.jpeg"
const About = () => {
  return (
    <div id="about" class="about-section">
      <div className="about-heading"><h1>About me</h1></div>
      <div className="about-info">
        <img src={profile_pic} alt="" />
        <div className="about-right">
        <div className="about-content">
          <p>I’m Eshika Kumari, a passionate Frontend Developer and problem solver who enjoys building modern, responsive, and user-friendly web applications. I love transforming ideas into real-world products and continuously improving my technical and creative skills.</p>
          <p>My journey includes building projects like a YouTube Clone and a Gemini AI Clone, where I focus on clean UI, performance, and smooth user experience. Alongside development, I actively practice Data Structures & Algorithms on LeetCode and participate in coding contests to strengthen my logical thinking and problem-solving ability.</p>
          <p>I’m driven by curiosity, consistency, and the desire to grow as a developer — always learning, experimenting, and building impactful digital experiences.</p>
          </div>
          <div className="education">
          <h1>Education</h1><hr />
          <div className="edu"><div class="edu-bar"></div>
         <div class="college">  <p>Bachelor's Degree in Computer Science and Engineering , NIT Patna</p>
          <p>2024-2028</p></div></div>
        </div>
        </div>

        </div>
      </div>
      
    
  )
}

export default About
