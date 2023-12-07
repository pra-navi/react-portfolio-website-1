import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/pranavinil/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/pra-navi" target="_blank"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials