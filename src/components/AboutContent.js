import "./AboutContentStyle.css"
import aboutback from "../assets/hero pics/aboutback.jpg";
import img1 from "../assets/hero pics/3.jpg";
import img2 from "../assets/hero pics/2.jpg";
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about-main">
      <div className="back">
        <img className='about-background' src={aboutback} alt='aboutback'></img>
      </div>

      <div className="content">
        <div className="top-section">
          <div className="left-section">
            <img className="img1" src={img1}></img>
            <img className="img2" src={img2}></img>
          </div>
          
          <div className="right-section">
            <div className="quote">
              <p>"Empowering women in tech, one line of code at a time!"</p>
            </div>

            <div className="missions">
              <h5>OUR MISSION</h5>
              <ul className="mission-list">
                <li>Empowering Girls in Tech</li>
                <li>Building a Supportive Community</li>
                <li>Teaching Coding Skills</li>
                <li>Promoting Leadership and Confidence</li>
              </ul>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AboutContent
