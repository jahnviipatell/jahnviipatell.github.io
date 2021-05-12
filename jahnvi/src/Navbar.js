import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React from 'react'
import logo from './assets/text-1620824259728.png'


const MyNavbar = () => {

  return (
    <Navbar expand="lg" className="justify-content-between">
      <Navbar.Brand href="/"><img alt='logo' className="logo" src={logo} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-sm-2">
          <Nav.Link href="/projects">PROJECTS</Nav.Link>
          <Nav.Link href="/info">INFO</Nav.Link>
          <Nav.Link href="/journal">JOURNAL</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar
