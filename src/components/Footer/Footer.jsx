import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/LOGO.png";
import user_image from "../../assets/user_image.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="footer logo" />
          <p>Design. Code. Create. Turning ideas into reality.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_image} alt="user image" />
            <input type="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
        <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
        © 2025 Pritam Chakraborty. All rights reserved.
        </p>
        <div className="footer-bottom-right">
            <p>Term of services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
