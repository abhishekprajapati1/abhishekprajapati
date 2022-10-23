import React, { Component } from 'react'
import kskproject from '../assets/kskProject.png';
import flpclone from '../assets/flpClone.png';
import quizproject from '../assets/quizzProject.png';
import muiLogo from '../assets/mui.png';
import htmlLogo from '../assets/html.png';
import jsLogo from '../assets/js.png';
import bootstrapLogo from '../assets/bootstrap.png';
import cssLogo from '../assets/css.png';
import reactLogo from '../assets/react.png';
import nodeLogo from '../assets/node.png';
import pythonLogo from '../assets/python.png';
import javaLogo from '../assets/java.png';
import mongodbLogo from '../assets/mongodb.png';


export default class Portfolio extends Component {
  render() {
    return (
      <section className='portfolio-wrapper'>
        <div className='title-section'>
          <h1>PORT<span>FOLIO</span></h1><span className="title-bg">Resume</span>
        </div>

        <div className="projects">
          <div className="head">
            <h2>my amazing works</h2>
          </div>
          <div className="global">
            <p className="default-para">
              These projects are sole work of mine. For now most of them are just static website. Soon I will try to make them dynamic.
            </p>
          </div>
          <div className="project-container">
            <div className="project">
              <img src={kskproject} alt="project krishaksevasansthan" />
              <div className="project-info">
                <h3>KRISHAK SEVA SANSTHAN</h3>
                <hr />
                <p>Krishak Seva Sansthan is a static website template for a non-profit organization. Specially for those that are working for making farmers lives better</p>

                <div className="project-action">
                  <a href="https://krishaksevasansthan.vercel.app/" target="_blank" className='second-btn'>
                    Visit
                  </a>
                  <a className="second-btn" href="https://github.com/abhi0661236/krishaksevasansthan" target='_blank'>Source Code</a>
                </div>

              </div>
            </div>

            <div className="project">
              <img src={flpclone} alt="project krishaksevasansthan" />
              <div className="project-info">
                <h3>FLIPKART CLONE</h3>
                <hr />
                <p>I am trying to clone flipkart's UI in basic languages like html, css and js. No other technology.</p>

                <div className="project-action">
                  <button className='second-btn'>
                    Visit
                  </button>
                  <a className="second-btn" href="#">Source Code</a>
                </div>

              </div>
            </div>
            <div className="project">
              <img src={quizproject} alt="project krishaksevasansthan" />
              <div className="project-info">
                <h3>QUIZ WEBSITE</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, aliquam.</p>

                <div className="project-action">
                  <button className='second-btn'>
                    Visit
                  </button>
                  <a className="second-btn" href="#">Source Code</a>
                </div>

              </div>
            </div>




          </div>
        </div>

        <div className="skills">
          <div className="head">
            <h2>What I know ?</h2>
          </div>

          <div className="head">
            <h3>Frontend Technologies</h3>

          </div>
          <div className="skill-container">
            <div className="skill">
              <label htmlFor='javascript'>
                <img src={jsLogo} alt="JavaScript logo" />
              </label>
              <progress id="javascript" value="80" max="100"> 80% </progress>
            </div>

            <div className="skill">
              <label htmlFor='html'>
                <img src={htmlLogo} alt="html logo" />
              </label>
              <progress id="html" value="70" max="100"> 70% </progress>
            </div>

            <div className="skill">
              <label htmlFor='css'>
                <img src={cssLogo} alt="CSS Logo" />
              </label>
              <progress id="css" value="80" max="100"> 80% </progress>
            </div>

            <div className="skill">
              <label htmlFor='bootstrap'>
                <img src={bootstrapLogo} alt="Bootstrap logo" />
              </label>
              <progress id="bootstrap" value="60" max="100"> 60% </progress>
            </div>

            <div className="skill">
              <label htmlFor='react'>
                <img src={reactLogo} alt="React Logo" />
              </label>
              <progress id="react" value="60" max="100"> 60% </progress>
            </div>

            <div className="skill">
              <label htmlFor='materialui'>
                <img src={muiLogo} alt="material UI" />
              </label>
              <progress id="materialui" value="70" max="100"> 70% </progress>
            </div>
          </div>





          <div className="head">
            <h3>Backend Technologies</h3>

          </div>
          <div className="skill-container">
            <div className="skill">
              <label htmlFor='node'>
                <img src={nodeLogo} alt="Node Logo" />
              </label>
              <progress id="node" value="50" max="100"> 50% </progress>
            </div>

            <div className="skill">
              <label htmlFor='mongodb'>
                <img src={mongodbLogo} alt="mongodb logo" />
              </label>
              <progress id="mongodb" value="40" max="100"> 40% </progress>
            </div>

            <div className="skill">
              <label htmlFor='python'>
                <img src={pythonLogo} alt="python logo" />
              </label>
              <progress id="python" value="80" max="100"> 80% </progress>
            </div>


            <div className="skill">
              <label htmlFor='java'>
                <img src={javaLogo} alt="java logo" />
              </label>
              <progress id="java" value="80" max="100"> 80% </progress>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
