import React, { useRef, useState } from "react";
import "./navbar.css";
import logo from "../../assets/LOGO.png";
import underline from "../../assets/main_icon.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import open from "../../assets/menu_open.svg";
import close from "../../assets/menu_close.svg";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    menuRef.current.classList.add("open");
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    menuRef.current.classList.remove("open");
  };
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <img src={open} onClick={openMenu} alt="open" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={close}
          onClick={closeMenu}
          alt="close"
          className="nav-mob-close"
        />
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
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
