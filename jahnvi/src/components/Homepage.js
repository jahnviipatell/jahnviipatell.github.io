import React from 'react'
import MyNavbar from '../Navbar'
import Background from '../assets/val-toch-BHeQQmZM8jE-unsplash.jpg'
// import LinkedIn from '../assets/iconfinder_SocialMedia_LinkedIn-Outline_2959747.png'
// import Hi from '../assets/text-1620846038340.png'
// import Junior from '../assets/text-1620846188338.png'
// import Jahnvi from '../assets/text-1620846403945.png'
const Homepage = () => {


  return (
    <>
      <MyNavbar />
      <div className="main-container">
        <div className="homepage-container">
          <img src={Background} alt="background" className="background" />
        </div >
        {/* <div className="info-container"> */}
        {/* <img src={Hi} alt="hi" className="text" /> */}
        {/* <img src={Jahnvi} alt="jahnvi" className="text" /> */}
        {/* <img src={Junior} alt="junior" className="text" /> */}
        {/* <h1>Hi, I&apos;m
            <br />
            Jahnvi Patel</h1>
          <h2>Junior Full Stack Web Developer</h2> */}
        {/* <div className="icon-container">
            <img src={LinkedIn} alt="linkedIn" className="icon" />
          </div> */}
        {/* </div> */}
      </div>
    </>
  )
}

export default Homepage
