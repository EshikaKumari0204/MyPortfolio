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
          {/* Education */}
          <div className="about-block">
            <h2 className="about-block-title">Education</h2>
            <div className="about-block-content">
              <div className="about-item">
                <div className="about-item-header">
                  <h3 className="about-item-title">National Institute of Technology, Patna</h3>
                  <span className="about-item-period">2024–2028</span>
                </div>
                <p className="about-item-sub">B.Tech in Computer Science and Engineering</p>
                <p className="about-item-meta">CGPA: 9.28</p>
              </div>
            </div>
          </div>

          <hr className="about-block-divider" />

          {/* Experience */}
          <div className="about-block">
            <h2 className="about-block-title">Experience</h2>
            <div className="about-block-content">
              <div className="about-item">
                <h3 className="about-item-title">Web Developer — HackSlash, NIT Patna</h3>
              </div>
              <div className="about-item">
                <h3 className="about-item-title">Volunteer — NSS, NIT Patna</h3>
              </div>
            </div>
          </div>

          <hr className="about-block-divider" />

          {/* Achievements */}
          <div className="about-block">
            <h2 className="about-block-title">Achievements</h2>
            <div className="about-block-content">
              <div className="about-item">
                <p className="about-item-desc">
                  Participated in Myntra WeForShe, Hack4Delhi (NSUT), and Adobe University Hackathon.
                </p>
              </div>

              <div className="about-item">
                <div className="about-highlight-box">
                  <span className="highlight-title">Flipkart GRID 8.0</span>
                  <span className="highlight-badge-pill">Semi-Finalist</span>
                </div>
              </div>

              <div className="about-sub-section">
                <h3 className="about-sub-title">Coding Achievements</h3>
                <p className="about-item-desc">
                  Solved 500+ coding problems across LeetCode, CodeChef, and GeeksforGeeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
