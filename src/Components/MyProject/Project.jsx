import React from 'react';
import './Project.css';
import chatbot from '../../assets/project_chatbot.svg';
import ems from '../../assets/project_ems.svg';
import basket from '../../assets/project_basket.jpg';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    title: 'RAG Chatbot',
    image: chatbot,
    alt: 'RAG Chatbot project preview',
    tags: ['AI & LLM', 'Vector Database'],
    githubUrl: 'https://github.com/EshikaKumari0204/Chatbot-Project'
  },
  {
    title: 'Employee Management Sys',
    image: ems,
    alt: 'Employee Management System preview',
    tags: ['MERN Stack'],
    githubUrl: 'https://github.com/EshikaKumari0204/EMS'
  },
  {
    title: 'Basket Bay',
    image: basket,
    alt: 'Basket Bay grocery delivery project preview',
    tags: ['MERN Stack'],
    githubUrl: 'https://github.com/EshikaKumari0204/GroceryDeliveryMernProject'
  }
];

const Project = () => {
  return (
    <section id="projects" className="project-section reveal-on-scroll">
      <div className="project-heading">
        <h1>My Projects</h1>
      </div>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <article key={index} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.alt} className="project-img" />
            </div>
            <h3 className="project-title">{project.title}</h3>
            <div className="tech-used">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="gotogit">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
                aria-label={`View ${project.title} on GitHub`}
              >
                <span>View on Github</span>
                <FaGithub size={18} className="github-icon" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project;
