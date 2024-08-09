import React from 'react'
import './footer.css'
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Pranavi</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://www.linkedin.com/in/pranavinil/" target="_blank"><BsLinkedin /></a>
        <a href="https://www.instagram.com/_pra_navi/" target="_blank"><FaInstagram /></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Pranavi. 2024. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer