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
            <h3>About me</h3>
            <p>Engineer | Traveller | Web Developer</p>
            <p>
              <br />
              Hi, my name is Jahnvi! I am a junior full-stack web developer & a keen traveller.
              <br />
              <br />
              I&apos;d been considering a career change into software for a while and had been talking with friends about it. One of my friends mentioned a coding boot-camp at General Assembly. I talked to him about it and got very excited. The fact pace, supportive teaching style and challenging curriculum were all right up my alley, and I knew it would be the best way to make a fast transition between careers.
              <br />
              <br />
              I felt stagnant in my career as a graduate mechanical engineer. Project after project, I was carrying out the same tasks and had stopped learning new things.
              <br />
              <br />
              Becoming a web developer is everything I love about engineering: being challenged, solving complex problems and working closely with smart and passionate people. I especially enjoy the culture born of open source collaboration and the fun of learning new things every day.
            </p>
          </div>
          <div className="skills-container">
            <h3 className="skill-title">Skills</h3>
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
          <div className="education-container">
            <h3 className="skill-title">Education</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Skills
