import React from 'react'
import SloveniaOne from '../assets/slovenia-one.jpg'
import PhiphiBoats from '../assets/phiphi-boats.jpg'

const Me = () => {




  return (
    <div id="me" className="new-page-three">
      {/* <div> */}
      <h3 className="projects-header">Me.</h3>
      <h6 className="projects-header">my life in pictures</h6>
      <ul className="me-ul">
        <li>
          <img src={SloveniaOne} alt="slovenia-car" className="me-img" />
        </li>
        <li>
          <img src={PhiphiBoats} alt="slovenia-car" className="me-img" />
        </li>
      </ul>
      {/* </div> */}
    </div>
  )
}

export default Me
