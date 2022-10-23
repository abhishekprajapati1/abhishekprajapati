
import React, { Component } from 'react';
import HeroImage from './HeroImage';


export default class Home extends Component {

  handleClick = ()=>{
    window.location.href = "https://apcodeblogs.blogspot.com/2022/08/who-am-i.html";
  }

  render() {
    return (
      <div className='home-container'>
          <div className="hero-container">
              <HeroImage />
          </div>
          <div className='hero-description'>
            <h1>I'm Abhishek Prajapati.</h1>
            <h2>Web Developer</h2>
            <p className="default-para">
            A passionate Full Stack Web Developer 🚀 having a special interest in Frontend technologies and experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.
            </p>
            <button className='main-btn' onClick={this.handleClick}>Know More</button>
          </div>
      </div>
    )
  }
}
