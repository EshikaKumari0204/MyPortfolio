import React from 'react';
import './Project.css';
import chatbot from '../../assets/chatbot.png';
import basket from '../../assets/basket_bay.jpg';
import ems from '../../assets/ems.jpg';
import { FaGithub } from 'react-icons/fa';
import {
  SiPython, SiLangchain, SiPinecone,
  SiReact, SiNodedotjs, SiMongodb, SiExpress
} from 'react-icons/si';

/* Tech badge definitions — icon + label + brand color */
const TECH_BADGES = {
  python:    { Icon: SiPython,    label: 'Python',    color: '#3776AB' },
  langchain: { Icon: SiLangchain, label: 'LangChain', color: '#1C3C3C' },
  pinecone:  { Icon: SiPinecone,  label: 'Pinecone',  color: '#000000' },
  react:     { Icon: SiReact,     label: 'React',     color: '#61DAFB' },
  nodejs:    { Icon: SiNodedotjs, label: 'Node.js',   color: '#5FA04E' },
  mongodb:   { Icon: SiMongodb,   label: 'MongoDB',   color: '#47A248' },
  express:   { Icon: SiExpress,   label: 'Express',   color: '#ffffff' },
};

const projectsData = [
  {
    title: 'RAG Chatbot',
    image: chatbot,
    alt: 'RAG Chatbot project preview',
    tags: ['AI & LLM', 'Vector Database'],
    techKeys: ['python', 'langchain', 'pinecone'],
    githubUrl: 'https://github.com/EshikaKumari0204/Chatbot-Project'
  },
  {
    title: 'Employee Management Sys',
    image: ems,
    alt: 'Employee Management System preview',
    tags: ['MERN Stack'],
    techKeys: ['react', 'nodejs', 'mongodb', 'express'],
    githubUrl: 'https://github.com/EshikaKumari0204/EMS'
  },
  {
    title: 'Basket Bay',
    image: basket,
    alt: 'Basket Bay grocery delivery project preview',
    tags: ['MERN Stack'],
    techKeys: ['react', 'nodejs', 'mongodb', 'express'],
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
            <div className="tech-icons-row">
              {project.techKeys.map((key) => {
                const badge = TECH_BADGES[key];
                if (!badge) return null;
                const { Icon, label, color } = badge;
                return (
                  <span key={key} className="tech-icon-badge" title={label} aria-label={label}>
                    <Icon size={20} color={color} />
                  </span>
                );
              })}
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
