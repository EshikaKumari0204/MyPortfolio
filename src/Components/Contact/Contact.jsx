import React from 'react'
import "./Contact.css"
import { CiMail } from "react-icons/ci";
import { MdAddIcCall } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { SiGithub } from "react-icons/si";


const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
   
    const formData = new FormData(event.target);
    formData.append("access_key",import.meta.env.VITE_WEB3FORM_ACCESS_KEY);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
   if(data.success){
    alert(data.message);
   }
   else{
      alert("Error");
   }
   event.target.reset();
  };
  return (
    <div id="contact" class="contact">
      <div className="contact-title"><h1>Get in touch</h1></div>
      <div className="contact-container">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p className="ready-to-work">I am currently available to take on new projects so feel free to send me a message about anything that you want me to work on .You can contact anytime</p>
          <div className="contact-details">
            <div className="contact-info"><CiMail size={20}/> <p>eshikakumaribgs@gmail.com</p></div>
            <div className="contact-info"><MdAddIcCall size={20} /> <p>9508694719</p></div>
            <div className="contact-info"><IoLocationOutline size={20}/> <p>Patna ,Bihar</p></div>
          </div>
         
          <div className="socialmedia">
            
            <a className="social-links" href="https://leetcode.com/u/Eshika_Gupta0204/"><SiLeetcode size={30}/></a>
            <a className="social-links" href="https://www.linkedin.com/in/eshika-kumari-5244a0327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><CiLinkedin size={30} /></a>
            <a className="social-links" href="https://github.com/EshikaKumari0204"><SiGithub size={30}/></a>
          </div>
        </div>
        <div className="contact-right">
          <form onSubmit={onSubmit}>
       
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder="Enter your name " name="name" />
             <label htmlFor="email">Your Email</label>
            <input type="email" placeholder="Enter your mail " name="email"/>
             <label htmlFor="message">Write your message here</label>
            <textarea name="message" id="message" rows="8" placeholder="Enter your message"></textarea>
            <button type="submit" className="submitnow" >Submit now</button>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
