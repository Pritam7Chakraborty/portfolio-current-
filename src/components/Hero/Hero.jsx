import React from 'react'
import './Hero.css'
import profile_img from '../../assets/hero.png'
function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="profile image" />
        <h1>
            <span>Hi, I'm Pritam Chakraborty,</span>
         a passionate developer from India.
        </h1>
        <p>
        I am skilled in c, Java, Reactjs, and Spring Boot, love solving problems, building scalable applications, and continuously learning new technologies. Let's create something amazing together!
        </p>
        <div className="hero-action">
            <div className="hero-connect">
                Connect with me
            </div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero