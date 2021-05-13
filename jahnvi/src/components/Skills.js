import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Nodejs from '../assets/nodejs-icon-logo-black-and-white.png'
import JavaScript from '../assets/JavaScript.png'
import Reactjs from '../assets/PikPng.com_google-play-store-logo_2690057.png'
import Python from '../assets/Python.png'
import Django from '../assets/Django.png'
import HTML from '../assets/HTML.png'
import CSS from '../assets/CSS.png'
import MongoDB from '../assets/MongoDB.png'
import PostgreSQL from '../assets/PostreSQL.png'
import Git from '../assets/Git.png'
import Heroku from '../assets/Heroku.png'
import Bootstrap from '../assets/Bootstrap.png'

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
                <p>Node.js</p>
              </li>
              <li className="skill">
                <img className="skill-icon" src={JavaScript} alt="javaScript" />
                <p>JavaScript</p>
              </li>
              <li className="skill">
                <img className="skill-icon" src={Reactjs} alt="reactjs" />
                <p>React.js</p>
              </li>
              <li className="skill">
                <img className="skill-icon" src={HTML} alt="HTML" />
                <p>HTML</p>
              </li>
              <li className="skill">
                <img className="skill-icon" src={Python} alt="python" />
                <p>Python</p>
              </li>
              <li className="skill">
                <img className="skill-icon django" src={Django} alt="django" />
                <p>Django</p>
              </li>
              <li className="skill">
                <img className="skill-icon css" src={CSS} alt="css" />
                <p>CSS</p>
              </li>
              <li className="skill">
                <img className="skill-icon" src={MongoDB} alt="MongoDB" />
                <p>MongoDB</p>
              </li>
              <li className="skill">
                <img className="skill-icon" src={PostgreSQL} alt="PostgreSQL" />
                <p>PostreSQL</p>
              </li>
              <li className="skill">
                <img className="skill-icon" src={Git} alt="Git" />
                <p>Git</p>
              </li>
              <li className="skill">
                <img className="skill-icon" src={Heroku} alt="Heroku" />
                <p>Heroku</p>
              </li>
              <li className="skill">
                <img className="skill-icon" src={Bootstrap} alt="Bootstrap" />
                <p>React Bootstrap</p>
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
