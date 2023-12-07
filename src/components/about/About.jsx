import React from 'react'
import './about.css'
import AboutPic from '../../assets/about_pic.jpg'
import { FaCode } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdEngineering } from "react-icons/md";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ AboutPic } alt="About Pic" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaCode className="about_icon"/>
              <h5>Experience</h5>
              <small>4+ Years of Coding</small>
            </article>
            <article className="about_card">
              <MdEngineering className="about_icon"/>
              <h5>I am a...</h5>
              <small>Software Developer, interested in creating solutions</small>
            </article>
            <article className="about_card">
              <RiTeamFill className="about_icon"/>
              <h5>Beyond Coding</h5>
              <small>Led Multiple (including coding) Projects</small>
            </article>
          </div>

          <a href="#contact" className="btn btn-primary">Let's Connect</a>

        </div>
      </div>
    </section>
  )
}

export default About