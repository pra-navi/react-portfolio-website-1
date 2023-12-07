import React from 'react'
import './experience.css'
import { IoMdCheckbox } from "react-icons/io";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>
            Frontend
          </h3>
          <div className="experience_content">
            <article className="experience_details">
              <IoMdCheckbox className="experience_details-icon"/>
              <div>
                <h4>UI/UX Design</h4>
              </div>
            </article>
            <article className="experience_details">
              <IoMdCheckbox className="experience_details-icon"/>
              <div>              
                <h4>Figma</h4>
              </div>
            </article>
            <article className="experience_details">
              <IoMdCheckbox className="experience_details-icon"/>
              <div>              
                <h4>JavaFX</h4>
              </div>
            </article>
            <article className="experience_details">
              <IoMdCheckbox className="experience_details-icon"/>
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience_details">
              <IoMdCheckbox className="experience_details-icon"/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience_details">
              <IoMdCheckbox className="experience_details-icon"/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
          </div>
        </div>
        
        <div className="experience_backend">
          <h3>
            Backend
          </h3>
          <div className="experience_content">
            <article className="experience_details">
              <IoMdCheckbox className="experience_details-icon"/>
              <div>
                <h4>Java</h4>
              </div>
            </article>
            <article className="experience_details">
              <IoMdCheckbox className="experience_details-icon"/>
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className="experience_details">
              <IoMdCheckbox className="experience_details-icon"/>
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience_details">
              <IoMdCheckbox className="experience_details-icon"/>
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="experience_details">
              <IoMdCheckbox className="experience_details-icon"/>
              <div>
                <h4>PostgreSQL</h4>
              </div>
            </article>
            <article className="experience_details">
              <IoMdCheckbox className="experience_details-icon"/>
              <div>
                <h4>Express.js</h4>
              </div>
            </article>
            <article className="experience_details">
              <IoMdCheckbox className="experience_details-icon"/>
              <div>
                <h4>Node.js</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience