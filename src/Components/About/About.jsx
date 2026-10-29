import React from 'react';
import './About.css';
import profile_pic from '../../assets/profilepic2.jpeg';

const About = () => {
  return (
    <section id="about" className="about-section reveal-on-scroll">
      <div className="about-heading">
        <h1>About me</h1>
      </div>
      <div className="about-info">
        <div className="about-img-wrapper">
          <img
            src={profile_pic}
            alt="Eshika Kumari profile"
            className="about-img"
          />
        </div>
        <div className="about-right">
          <div className="about-content">
            <p>
              I’m Eshika Kumari, a passionate Full Stack Developer and problem solver who enjoys building modern, responsive, and user-friendly web applications. I love transforming ideas into real-world products and continuously improving my technical and creative skills.
            </p>
            <p>
              My journey includes building projects like Basket Bay , a grocery delivery website and an Employee Management Application, where I focus on clean UI, performance, and smooth user experience. Alongside development, I actively practice Data Structures & Algorithms on LeetCode and participate in coding contests to strengthen my logical thinking and problem-solving ability.
            </p>
            <p>
              I’m driven by curiosity, consistency, and the desire to grow as a developer — always learning, experimenting, and building impactful digital experiences.
            </p>
          </div>
          <div className="education">
            <h2>Education</h2>
            <hr className="edu-divider" />
            <div className="edu">
              <div className="edu-bar" aria-hidden="true" />
              <div className="college">
                <p className="college-name">
                  Bachelor's Degree in Computer Science and Engineering , NIT Patna
                </p>
                <p className="college-year">2024-2028</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
