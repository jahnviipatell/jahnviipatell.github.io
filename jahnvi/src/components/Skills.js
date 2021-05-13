import React from 'react'
// import Navbar from '../Navbar'
// import Footer from '../Footer'
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
      {/* <Navbar /> */}
      <div className="blank-background-overlay">
        <div className="main-layout">
          <div className="about-me-container">
            <div className="about-me-lines"></div>
            <h3>About me</h3>
            <br />
            <p>Engineer | Traveller | Web Developer</p>
            <div className="line"></div>
            <p className="main-paragraph">
              <br />
              Hi, my name is Jahnvi! I am a junior full-stack web developer & a keen traveller.
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
          <div className="right-half">
            <div className="skills-container">
              {/* <h5 className="skill-title">Skills</h5> */}
              <br />
              <ul className="skills">
                <li className="skill">
                  <img className="skill-icon" src={Nodejs} alt="nodejs" />
                  <p className="label">Node.js</p>
                </li>
                <li className="skill">
                  <img className="skill-icon" src={JavaScript} alt="javaScript" />
                  <p className="label">JavaScript</p>
                </li>
                <li className="skill">
                  <img className="skill-icon" src={Reactjs} alt="reactjs" />
                  <p className="label">React.js</p>
                </li>
                <li className="skill">
                  <img className="skill-icon" src={HTML} alt="HTML" />
                  <p className="label">HTML</p>
                </li>
                <li className="skill">
                  <img className="skill-icon" src={Python} alt="python" />
                  <p className="label">Python</p>
                </li>
                <li className="skill">
                  <img className="skill-icon django" src={Django} alt="django" />
                  <p className="label">Django</p>
                </li>
                <li className="skill">
                  <img className="skill-icon css" src={CSS} alt="css" />
                  <p className="label">CSS</p>
                </li>
                <li className="skill">
                  <img className="skill-icon" src={MongoDB} alt="MongoDB" />
                  <p className="label">MongoDB</p>
                </li>
                <li className="skill">
                  <img className="skill-icon" src={PostgreSQL} alt="PostgreSQL" />
                  <p className="label">PostreSQL</p>
                </li>
                <li className="skill">
                  <img className="skill-icon" src={Git} alt="Git" />
                  <p className="label">Git</p>
                </li>
                <li className="skill">
                  <img className="skill-icon" src={Heroku} alt="Heroku" />
                  <p className="label">Heroku</p>
                </li>
                <li className="skill">
                  <img className="skill-icon" src={Bootstrap} alt="Bootstrap" />
                  <p className="label">React Bootstrap</p>
                </li>
              </ul>
            </div>
            <div className="education-container">
              <h3 className="right-text">Education & Experience</h3>
              <div className="ed-lines"></div>
              <ul className="education-ul">
                <li className="education-li">
                  <p><b>GENERAL ASSEMBLY, London</b>
                    <br />
                    <i>(February-May/2021)</i>
                    <br />
                    <br />
                    <br />
                    Software Engineering Immersive
                  </p>
                </li>
                <li className="education-li">
                  <p><b>HEATHROW AIRPORT LTD., London</b>
                    <br />
                    <i>(September/2019–January/2021)</i>
                    <br />
                    <br />
                    Graduate Engineer
                  </p>
                </li>
                <li className="education-li">
                  <p className="brunel"><b>BRUNEL UNIVERSITY, London</b>
                    <br />
                    <i>(September/2014–September/2020)</i>
                    <br />
                    <br />
                    Aerospace Engineering (BEng)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Skills
