import React, { useRef } from 'react'
import './contact.css'
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_otybah6', 'template_93bv2bs', form.current, 'bL6YCH_qE96OYyeu0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>pranavikiran@gmail.com</h5>
            <a href="mailto:pranavikiran@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <FaTelegram className="contact_option-icon"/>
            <h4>Telegram</h4>
            <h5>@pra_navi</h5>
            <a href="https://t.me/pra_navi" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <IoLogoWhatsapp className="contact_option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+65 88560021</h5>
            <a href="https://wa.me/6588560021" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email Address" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact