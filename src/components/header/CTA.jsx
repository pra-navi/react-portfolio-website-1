import React from 'react'
import Resume from "../../assets/Pranavi's Resume Attachment.pdf"

const CTA = () => {
  return (
    <div>
        <div className="cta">
            <a href={Resume} download className="btn">Download Resume</a>
            <a href="#contact" className="btn btn-primary">Let's Connect</a>
        </div>
    </div>
  )
}

export default CTA