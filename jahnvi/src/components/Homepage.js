import React from 'react'
// import Navbar from '../Navbar'
// import Footer from '../Footer'
import Skills from '../components/Skills'

const Homepage = () => {


  return (
    <>
      <div>
        <div id="HOME">
          <h3 className="title">Junior <br /> Full Stack <br /> Web Developer</h3>
        </div>
        <div className="arrow-container">
          <div className="arrow"></div>
        </div>
      </div>
      <div className="new-page">
        <Skills />
      </div>
    </>
  )
}

export default Homepage
