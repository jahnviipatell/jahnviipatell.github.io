import React from 'react'
import MyNavbar from '../Navbar'
import Footer from '../Footer'
import Skills from '../components/Skills'

const Homepage = () => {


  return (
    <>
      <MyNavbar />
      <div id="HOME">
        <h3 className="title">Junior <br /> Full Stack <br /> Web Developer</h3>
      </div>
      <Skills />
      <h4>test</h4>

      <Footer />
    </>
  )
}

export default Homepage
