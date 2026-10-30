import React from 'react';
import './Skills.css';
import python from '../../assets/python.svg';
import js from '../../assets/javascript.svg';
import react from '../../assets/react.svg';
import nodejs from '../../assets/nodejs.svg';
import gitIcon from '../../assets/git.svg';
import githubIcon from '../../assets/github-icon.svg';
import cpp from '../../assets/cplusplus.svg';
import mongodb from '../../assets/mongodb.svg';
import mysql from '../../assets/mysql.svg';
import ml from '../../assets/ml.svg';

const skillsData = [
  { name: 'Python', icon: python, alt: 'Python logo' },
  { name: 'JavaScript', icon: js, alt: 'JavaScript logo' },
  { name: 'React.js', icon: react, alt: 'React.js logo' },
  { name: 'Node.js', icon: nodejs, alt: 'Node.js logo' },
  { name: 'Git & GitHub', icon: gitIcon, alt: 'Git logo', extraIcon: githubIcon, extraAlt: 'GitHub logo' },
  { name: 'C++', icon: cpp, alt: 'C++ logo' },
  { name: 'MongoDB', icon: mongodb, alt: 'MongoDB logo' },
  { name: 'MySQL', icon: mysql, alt: 'MySQL logo' },
  { name: 'AI and ML', icon: ml, alt: 'TensorFlow / Machine Learning logo' }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section reveal-on-scroll">
      <div className="skills-title">
        <h1>My Skills</h1>
      </div>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <div className={`skill-icon-wrapper${skill.extraIcon ? ' skill-icon-dual' : ''}`}>
              <img src={skill.icon} alt={skill.alt} className="skill-img" />
              {skill.extraIcon && (
                <img src={skill.extraIcon} alt={skill.extraAlt} className="skill-img skill-img-github" />
              )}
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
