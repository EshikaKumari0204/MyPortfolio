import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.jpeg"
import {useState,useRef} from "react"
import cross from "../../assets/cross1.svg"
import menubar from "../../assets/menu.svg"
import AnchorLink from "react-anchor-link-smooth-scroll"
const Navbar = () => {
  const [menu,setmenu]=useState("home");
  const menuref=useRef();
  const openMenu=()=>{
   menuref.current.style.right='0';
  }
  const closeMenu=()=>{
     menuref.current.style.right='-350px';

  }
  return (
    <div class="navbar">
      <img src={logo} alt="logo" className="logo" />
      <img src={menubar} alt="menu" className="menu-open" onClick={openMenu}/>
      <ul class="navlinks" ref={menuref}>
        <img src={cross} alt="cross" className="menu-close" onClick={closeMenu} />
        <li><AnchorLink className="anchor-links" href=""><p onClick={()=>{setmenu('home')}} className={menu==='home'?'active':''}>Home</p></AnchorLink></li>
        <li><AnchorLink className="anchor-links" offset={50} href="#about"><p onClick={()=>{setmenu('about')}} className={menu==='about'?'active':''}>About Me</p></AnchorLink></li>
        <li><AnchorLink className="anchor-links" offset={50} href="#skills"><p onClick={()=>{setmenu('skills')}} className={menu==='skills'?'active':''}>Skills</p></AnchorLink></li>
        <li><AnchorLink className="anchor-links" offset={50} href="#projects"><p onClick={()=>{setmenu('project')}} className={menu==='project'?'active':''}>Projects</p></AnchorLink></li>
        <li><AnchorLink className="anchor-links" offset={50} href="#contact"><p onClick={()=>{setmenu('contacts')}} className={menu==='contacts'?'active':''}>Contact</p></AnchorLink></li>
      </ul>
      
      <div className="connect"><AnchorLink className="anchor-links" offset={50} href="#contact">Connect With me</AnchorLink></div>
    </div>
  )
}
export default Navbar
