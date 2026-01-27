import React from 'react'
import logo from "../../assets/logo.jpeg"
import { FaRegUser } from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
  return (
    <div class="footer">
      <div className="top">
        <div className="top-left"><img src={logo} alt="logo" /><p>Developer | Problem Solver | Learner</p></div>
        <div className="top-right">
          <div className="sendmail"><FaRegUser size={16} /><input type="email" placeholder="enter your mail"/></div>
          <button className="subscribe">Subscribe</button>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <div className="bottom-left">&copy; Eshika Kumari. All rights reserved.</div>
        <div className="bottom-right">
          <p>Terms of service </p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
