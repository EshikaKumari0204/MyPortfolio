import React from 'react';
import logo from '../../assets/eshika_logo_svg.svg';
import { TbBrandLeetcode } from 'react-icons/tb';
import { LuGithub } from 'react-icons/lu';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="Eshika Kumari logo" className="footer-logo" />
          <p className="footer-tagline">Developer | Problem Solver | Learner</p>
        </div>
        <div className="footer-top-right">
          <a
            className="footer-social-btn"
            href="https://leetcode.com/u/Issue_0204/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Eshika Kumari on LeetCode"
          >
            <TbBrandLeetcode size={20} />
            <span>Leetcode</span>
          </a>
          <a
            className="footer-social-btn"
            href="https://github.com/EshikaKumari0204"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Eshika Kumari on GitHub"
          >
            <LuGithub size={20} />
            <span>Github</span>
          </a>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>&copy; {new Date().getFullYear()} Eshika Kumari. All rights reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <span>Terms of service</span>
          <span>Privacy Policy</span>
          <AnchorLink href="#contact" className="footer-contact-link">
            Connect with me
          </AnchorLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
