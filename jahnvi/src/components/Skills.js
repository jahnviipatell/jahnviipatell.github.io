import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Nodejs from '../assets/nodejs-icon-logo-black-and-white.png'
import JavaScript from '../assets/pngwing.com.png'
import Reactjs from '../assets/PikPng.com_google-play-store-logo_2690057.png'
import Python from '../assets/Python.png'
import Django from '../assets/Django.png'
import HTML from '../assets/HTML.png'

const Skills = () => {


  return (
    <>
      <Navbar />
      <div className="blank-background-overlay">
        <div className="main-layout">
          <div className="about-me-container">
            <h3>Hi, I&apos;m Jahnvi Patel</h3>
            <p>
              <br />
              I am a plainspoken junior developer regarded for my compassion, logic, and creativity. I have a background in mechanical engineering with a proven ability to serve all projects with a methodical approach and focus on inclusiveness. <br />
              <br />
              Changing careers to allow myself to see my solutions implemented and follow projects through to the end of their life-cycle. Motivated to work as part of a diverse team or as an individual contributor with a strong desire to continuously improve. </p>
          </div>
          <div className="skills-container">
            <h3>Skills</h3>
            <ul className="skills">
              <li className="skill">
                <img className="skill-icon" src={Nodejs} alt="nodejs" />
                <h6>Node.js</h6>
              </li>
              <li className="skill">
                <img className="skill-icon" src={JavaScript} alt="javaScript" />
                <h6>JavaScript</h6>
              </li>
              <li className="skill">
                <img className="skill-icon" src={Reactjs} alt="reactjs" />
                <h6>React.js</h6>
              </li>
              <li className="skill">
                <img className="skill-icon" src={Python} alt="python" />
                <h6>Python</h6>
              </li>
              <li className="skill">
                <img className="skill-icon" src={Django} alt="django" />
                <h6>Django</h6>
              </li>
              <li className="skill">
                <img className="skill-icon" src={HTML} alt="HTML" />
                <h6>HTML</h6>
              </li>
              <li className="skill">
                {/* <img className="skill-icon" src={} alt="HTML" /> */}
                <h6>HTML</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Skills
