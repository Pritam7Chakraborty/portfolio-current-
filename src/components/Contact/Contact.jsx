import React from "react";
import "./Contact.css";
import email_icon from "/src/assets/email.png";
import location_icon from "/src/assets/location.png";
import linkedin_icon from "/src/assets/linkedin.png";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Feel free to reach out for any inquiries or collaboration
            opportunities.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={email_icon} alt="email icon" />
              <p>cpritam870@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location icon" />
              <p>Westbengal, India</p>
            </div>
            <div className="contact-detail">
              <img src={linkedin_icon} alt="linkedin icon" />
              <p>www.linkedin.com/in/pritam-chakraborty-090532273</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" />
          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
