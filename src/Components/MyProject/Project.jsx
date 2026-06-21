import React from 'react'
import "./Project.css"
import chatbot from "../../assets/chatbot.png"
import basket from "../../assets/basket_bay.jpg"
import ems from "../../assets/ems.jpg"
import {FaGithub} from "react-icons/fa"
const Project = () => {
  return (
    <div id="projects" class="project-section">
      <div className="project-heading"><h1>My Projects</h1></div>
      <div className="projects-container">
        <div className="project">
          <div ><img src={chatbot} alt="" /></div>
          <p>RAG Chatbot</p>
          <div className="tech-used"><p>AI & LLM</p><p>Vector Database</p></div>
           <div className="gotogit"><a href="https://github.com/EshikaKumari0204/Chatbot-Project">View on Github</a><FaGithub size={20}/></div>
        </div>
        
           <div className="project">
          <div ><img src={ems} alt="" /></div>
          <p>Employee Management Sys</p>
          <div className="tech-used"><p>MERN Stack</p></div>
           <div className="gotogit"><a href="https://github.com/EshikaKumari0204/EMS">View on Github</a><FaGithub size={20}/></div>
        </div>
             <div className="project">
          <div ><img src={basket} alt="" /></div>
          <p>Basket Bay</p>
          <div className="tech-used"><p>MERN Stack</p></div>
        <div className="gotogit"><a href="https://github.com/EshikaKumari0204/GroceryDeliveryMernProject">View on Github</a><FaGithub size={20}/></div>
        </div>
      </div>
    </div>
  )
}
export default Project
