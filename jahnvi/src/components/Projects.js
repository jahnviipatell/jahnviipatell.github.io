import React from 'react'
import TraitsScreenshot from '../assets/TraitsScreenshot.png'
import IcelanderScreenshot from '../assets/IcelanderScreenshot.png'
import QuoteGardenScreenshot from '../assets/QuoteGardenScreenshot.png'
import SpaceInvadersScreenshot from '../assets/SpaceInvadersScreenshot.png'
import ExternalLink from '../assets/ExternalLink.png'
import GitHub from '../assets/pngjoy.com_telegram-icon-github-icon-png-white-png-download_1164606.png'

const Projects = () => {



  return (
    <>
      <div id="projects" className="new-page-two">
        <h3 className="projects-header">Projects.</h3>
        <div className="projects-container">
          <div className="right-half">
            <ul className="projects-ul">
              <li className="project-li">
                <img src={TraitsScreenshot} alt="traits" className="project-screenshot" />
                <div className="description-and-links">
                  <p className="project-description">
                    A personality test that scores your answers against the ‘Big 5’ traits and returns a detailed set of results for each trait. Users are able to register/log in and save results to the database. This project used an external package Chart.js to display numerical results as an interactive doughnut chart. Full-stack app rooted in Python, Django and PostgreSQL back-end.
                  </p>
                  <div className="links-container">
                    <a className="a-link" href="https://traitts.herokuapp.com/">
                      Visit Site
                      <img src={ExternalLink} alt="external-link" className="external-link" />
                    </a>
                    <a className="a-link" href="https://github.com/jahnviipatell/SEI-Project-Four">
                      GitHub
                      <img src={GitHub} alt="external-link" className="external-link" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="project-li">
                <img src={IcelanderScreenshot} alt="traits" className="project-screenshot" />
                <div className="description-and-links">
                  <p className="project-description">
                    An app that allows a user to browse our database of holidays by package and view the itinerary by day. Displaying corresponding locations on an interactive map of Iceland and allowing these to be saved to a user&apos;s profile. Full-stack MERN application using our own RESTful API. Using React with Node.js, Express & MongoDB.
                  </p>
                  <div className="links-container">
                    <a className="a-link" href="https://icelander.netlify.app/">
                      Visit Site
                      <img src={ExternalLink} alt="external-link" className="external-link" />
                    </a>
                    <a className="a-link" href="https://github.com/jahnviipatell/SEI-Project-Three">
                      GitHub
                      <img src={GitHub} alt="external-link" className="external-link" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="project-li">
                <img src={QuoteGardenScreenshot} alt="traits" className="project-screenshot" />
                <div className="description-and-links">
                  <p className="project-description">
                    This project was a 48-hour pair programming task. We built an app that displayed a quote library with a changing background at set intervals. Using JavaScript, React Hooks, CSS, Express with Node.js. Integrating two public APIs (Quote-Garden & Unsplash).
                  </p>
                  <div className="links-container">
                    <a className="a-link" href="https://quotes-garden.netlify.app/">
                      Visit Site
                      <img src={ExternalLink} alt="external-link" className="external-link" />
                    </a>
                    <a className="a-link" href="https://github.com/jahnviipatell/SEI-Project-Two">
                      GitHub
                      <img src={GitHub} alt="external-link" className="external-link" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="project-li">
                <img src={SpaceInvadersScreenshot} alt="space-invaders" className="project-screenshot" />
                <div className="description-and-links">
                  <p className="project-description">
                    My first project for the Software Engineering Immersive course. A functioning browser game using vanilla JavaScript. I created my own version of Space Invaders, using JavaScript, HTML, CSS.
                  </p>
                  <div className="links-container">
                    <a className="a-link" href="https://jahnviipatell.github.io/SEI-Project-One/">
                      Visit Site
                      <img src={ExternalLink} alt="external-link" className="external-link" />
                    </a>
                    <a className="a-link" href="https://github.com/jahnviipatell/SEI-Project-One">
                      GitHub
                      <img src={GitHub} alt="external-link" className="external-link" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
