import React from 'react'
import logo from "../../assets/eshika_logo_svg.svg"
import { FaRegUser } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import "./Footer.css"
import { LuGithub } from "react-icons/lu";
const Footer = () => {
  return (
    <div class="footer">
      <div className="top">
        <div className="top-left"><p>Developer | Problem Solver | Learner</p></div>
        <div className="top-right">
          <a className="subscribe" href="https://leetcode.com/u/Eshika_Gupta0204/"> <TbBrandLeetcode size={20} />Leetcode</a>
          <a className="subscribe" href="https://github.com/EshikaKumari0204"> <LuGithub size={20} />Github</a>
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
