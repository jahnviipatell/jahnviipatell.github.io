import React from 'react'
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
// import ProjectFour from '../assets/ProjectFour.gif'
// import Traits from '../assets/Traits.png'
import TraitsScreenshot from '../assets/TraitsScreenshot.png'
import IcelanderScreenshot from '../assets/IcelanderScreenshot.png'
import QuoteGardenScreenshot from '../assets/QuoteGardenScreenshot.png'
import SpaceInvadersScreenshot from '../assets/SpaceInvadersScreenshot.png'


const Skills = () => {


  return (
    <>
      <div className="blank-background-overlay">
        <div className="main-layout">
          <div className="about-me-header-para">
            <div className="about-me-container">
              <h3 className="about-me-header">About me.</h3>
              {/* <div className="about-me-lines"></div> */}
              <p className="three-header">Engineer | Traveller | Web Developer</p>
              <div className="line"></div>
              <p className="main-paragraph">
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
          </div>
          <div className="skills-container">
            <h3 className="skills-header">Skills.</h3>
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
        </div>
        <div className="new-page-two">
          <h3 className="projects-header">Projects.</h3>
          {/* Project 4 */}
          <div className="projects-container">
            {/* <img className="screen-recording" src={ProjectFour} alt="four" /> */}
            <div className="right-half">
              <ul className="projects-ul">
                <li className="project-li">
                  <img src={TraitsScreenshot} alt="traits" className="project-screenshot" />
                  <button>Visit Site</button>
                </li>
                <li>
                  <img src={SpaceInvadersScreenshot} alt="traits" className="project-screenshot" />
                </li>
                <li>
                  <img src={IcelanderScreenshot} alt="traits" className="project-screenshot" />
                </li>
                <li>
                  <img src={QuoteGardenScreenshot} alt="traits" className="project-screenshot" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
