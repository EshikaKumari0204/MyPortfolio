import React from 'react'
import "./Project.css"
import chatbot from "../../assets/chatbot.png"
import youtube from "../../assets/youtube.png"
import gemini from "../../assets/gemini.png"
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
          <div ><img src={youtube} alt="" /></div>
          <p>Youtube Clone</p>
          <div className="tech-used"><p>React</p><p>CSS</p></div>
           <div className="gotogit"><a href="https://github.com/EshikaKumari0204/ReactProjectYoutubeClone">View on Github</a><FaGithub size={20}/></div>
        </div>
             <div className="project">
          <div ><img src={gemini} alt="" /></div>
          <p>Gemini Clone</p>
          <div className="tech-used"><p>React</p><p>GenAI</p></div>
        <div className="gotogit"><a href="https://github.com/EshikaKumari0204/ReactProjectGeminiClone">View on Github</a><FaGithub size={20}/></div>
        </div>
      </div>
    </div>
  )
}
export default Project
