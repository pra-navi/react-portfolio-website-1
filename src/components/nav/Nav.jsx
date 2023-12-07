import React from 'react'
import './nav.css'
import { IoMdHome } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";import { FaBook } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { useState } from 'react'

const Nav = () => {
  const [active, setActive] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><IoMdHome /></a>
      <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><FaUserAlt /></a>
      <a href="#experience" onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}><FaBook /></a>
      <a href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}><IoCall /></a>
    </nav>
  )
}

export default Nav