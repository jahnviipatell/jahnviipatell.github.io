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
              </li>
              <li>
                <img src={SpaceInvadersScreenshot} alt="traits" className="project-screenshot" />
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
              </li>
              <li>
                <img src={IcelanderScreenshot} alt="traits" className="project-screenshot" />
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
              </li>
              <li>
                <img src={QuoteGardenScreenshot} alt="traits" className="project-screenshot" />
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
