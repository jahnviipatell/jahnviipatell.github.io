import React from 'react'
import MyNavbar from '../Navbar'
import Footer from '../Footer'
import Background from '../assets/val-toch-BHeQQmZM8jE-unsplash.jpg'

const Homepage = () => {


  return (
    <>
      <MyNavbar />
      <div className="main-container">
        <div className="homepage-container">
          <img src={Background} alt="background" className="background" />
        </div >
        <h3 className="title">Junior <br /> Full Stack <br /> Web Developer</h3>
        <Footer />
      </div>
    </>
  )
}

export default Homepage
