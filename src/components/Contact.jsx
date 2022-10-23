import React, { Component } from 'react'
import locationLogo from '../assets/location.png';
import phoneLogo from '../assets/phone.png';
import gmailLogo from '../assets/gmail.png';


export default class Contact extends Component {
  render() {
    return (
      <div className='contact-wrapper'>
        <div className='title-section'>
          <h1>CONTACT<span> ME</span></h1><span className="title-bg">Resume</span>
        </div>

        <div className="contact-details">
          <div className="contact-detail">
            <img src={locationLogo} alt="location icon" />
            <h4>ADDRESS</h4>
            <p>Rajouri Garden, Delhi, India</p>
          </div>

          <div className="contact-detail">
            <img src={phoneLogo} alt="phone icon" />
            <h4>Phone Address</h4>
            <p>+918850593776</p>
          </div>

          <div className="contact-detail">
            <img src={gmailLogo} alt="gmail icon" />
            <h4>Mail Address</h4>
            <p>ap0661236@gmail.com</p>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="social-media">
            <h3>Get In Touch</h3>
            <p>
              Feel free to suggest, ask or comment.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="social-corner">
              <a href="https://github.com/abhi0661236"><i className='fab fa-github'></i></a>
              <a href="https://www.linkedin.com/in/abhi-prajapati/"><i className='fab fa-linkedin'></i></a>
              <a href="https://www.hackerrank.com/ap0661236"><i className='fab fa-hackerrank'></i></a>
              <a href="https://www.instagram.com/artistt__abhi/"><i className='fab fa-instagram'></i></a>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name"  />
              </div>

              <div>
                <label htmlFor="email">Email ID</label>
                <input type="email" id="email"  />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="7">
                </textarea>
              </div>

              <div>
                <button>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    )
  }
}
