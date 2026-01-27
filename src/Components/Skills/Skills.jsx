import React from 'react'
import "./Skills.css"
import js from "../../assets/js.png"
import nodejs from "../../assets/nodejs.png"
import cpp from "../../assets/c++.png"
import github from "../../assets/github.png"
import react from "../../assets/react.png"
import tailwindcss from "../../assets/tailwindcss.png"
const Skills = () => {
  return (
    <div id="skills" class="skills-section">
      <div className="skills-title"><h1>My Skills</h1></div>
      <div className="skills-container">
         <div className="skill"><img src={tailwindcss} alt="js" />
        <p>Tailwindcss</p></div>
        <div className="skill"><img src={js} alt="js" />
        <p>Javascript</p></div>
        
          <div className="skill"><img src={react} alt="react" />
          <p>React.js</p></div>
           <div className="skill"><img src={nodejs} alt="nodejs" />
         <p>Node.js</p></div>
           <div className="skill"><img src={github} alt="github" />
           <p>Git and Github</p></div>
            <div className="skill"><img src={cpp} alt="cpp" />
            <p>C++</p></div>
      </div>
    </div>
  )
}

export default Skills

