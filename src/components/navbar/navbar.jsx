import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/LOGO.png";
import underline from "../../assets/main_icon.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul className="nav-menu">
        <li>
          <AnchorLink
            className="anchor-link"
            href="#home"
            onClick={() => setMenu("home")}
          >
            <p>Home</p>
            {menu === "home" && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#about"
            onClick={() => setMenu("about")}
          >
            <p>About Me</p>
            {menu === "about" && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#services"
            onClick={() => setMenu("services")}
          >
            <p>Services</p>
            {menu === "services" && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#work"
            onClick={() => setMenu("work")}
          >
            <p>Portfolio</p>
            {menu === "work" && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
            onClick={() => setMenu("contact")}
          >
            <p>Contact</p>
            {menu === "contact" && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default Navbar;
