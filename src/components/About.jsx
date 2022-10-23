import React, { Component } from 'react';

import HeroImage from './HeroImage';

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className='title-section'>
          <h1>ABOUT <span>ME</span></h1><span className="title-bg">Resume</span>
        </div>

        <div className="head">
          <h2>Personal Infos</h2>
        </div>
        <HeroImage />

        <div className='info-card-container'>
          <div className="info-card">
            <p>First Name</p>
            <h4>Abhishek</h4>
          </div>
          <div className="info-card">
            <p>Last Name</p>
            <h4>Prajapati</h4>
          </div>
          <div className="info-card">
            <p>Age</p>
            <h4>19.8 Years</h4>
          </div>
          <div className="info-card">
            <p>Nationality</p>
            <h4>Indian</h4>
          </div>
          <div className="info-card">
            <p>Freelance</p>
            <h4>Available</h4>
          </div>
          <div className="info-card">
            <p>Address</p>
            <h4>Uttar Pradesh, India</h4>
          </div>
          <div className="info-card">
            <p>Phone</p>
            <h4>+918850593776</h4>
          </div>
          <div className="info-card">
            <p>E-mail</p>
            <h4>ap0661236@gmail.com</h4>
          </div>
          <div className="info-card">
            <p>Github</p>
            <h4>abhi0661236</h4>
            </div>  
          <div className="info-card">
            <p>Languages</p>
            <h4>English, Hindi</h4>
          </div>
          
        </div> 

      </div>
    )
  }
}
