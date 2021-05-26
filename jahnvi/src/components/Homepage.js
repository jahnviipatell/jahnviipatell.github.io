import React from 'react'
import Skills from './Skills'
import Projects from './Projects'
import Me from './Me'

const Homepage = () => {


  return (
    <>
      <div>
        <div id="HOME">
          <h3 className="title">Junior <br /> Full Stack <br /> Web Developer</h3>
        </div>
        <div className="arrow-container">
          <a href="#skills">
            <div className="arrow">
            </div>
          </a>
        </div>
      </div>
      <div className="new-page">
        <Skills />
      </div>
      <Projects />
      <Me />
    </>
  )
}

export default Homepage
