import React from 'react'
import { Link } from 'react-router-dom'
import machineImage from "../images/bg2.jpg"
import bossImage from "../images/boss.jpg"
import sonImage from "../images/son.jpg"

import image1 from "../images/bg1.jpg"
import image2 from "../images/bg2.jpg"
import image3 from "../images/bg3.jpg"
import image4 from "../images/tissues1.jpg"
import image5 from "../images/tissues2.jpg"
import image6 from "../images/tissues3.jpg"
import image7 from "../images/tissues4.jpg"
import image8 from "../images/tissues5.jpg"

const About = () => {
  return (
    <>
    <div className="container">
      <section className="about-us-section">
          <h2 className="about-heading">
            About Us
            <span className="heading-style"></span>
          </h2>
        <div className="about-us-wrapper">
          <img src={machineImage} alt="machine" className='about-image' />
          <div className="about-content">
            <div className="about-text">
              <h4>Overview</h4>
            <p>
            T&L Teddy Soft Papers  is a leading manufacturer specializing  company  in high-quality toilet 
            tissues, with a commitment to exceptional hygiene and comfort. Our p roducts are designed to meet the diverse needs of our customers while maintaining the highest standards of quality and sustainability.
            </p>
            </div>
            <div className="about-text">
              <h4>Mission</h4>
            <p>
            We aim to deliver premium toilet tissues that combine softness, strength, and environmental 
            responsibility. We strive to enhance daily life through products that ofer superior performance and care.
            </p>
            </div>
            <div className="about-text">
            <p>
            We are dedicated to minimizing our environmental footprint. Our production methods 
            incorporate recycled materials and energy-eficient practices to support a healthier planet. We continuously seek innovations that enhance our sustainability eforts.
            </p>
            </div>

            {/* <a className="about-btn" href="#gallery">See Gallery</a> */}
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="about-heading">
            Our Team
            <span className="heading-style"></span>
        </h2>
        <div className="team-wrapper">
          <figure className="player">
            <img src={bossImage} alt="boss" className='player-img'/>
            <figcaption className='player-name'>Mr Lesley</figcaption>
            <figcaption className='player-profession'>- Boss</figcaption>
          </figure>
          <figure className="player">
            <img src={sonImage} alt="son" className='player-img'/>
            <figcaption className='player-name'>Mr Lesley's son</figcaption>
            <figcaption className='player-profession'>- Manufacturer</figcaption>
          </figure>
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <h2 className="about-heading">
            Our Gallery
            <span className="heading-style"></span>
        </h2>
        <div className="gallery-wrapper">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
          <img src={image6} alt="" />
          <img src={image7} alt="" />
          <img src={image8} alt="" />
          {/* <img src="../images/boss.jpg" alt="" />
          <img src="../images/son.jpg" alt="" /> */}
        </div>
      </section>
    </div>
    </>
  )
}

export default About