import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
// import Skills from './components/Skills'
// import Projects from './components/Projects'
import Navbar from './Navbar'
import Footer from './Footer'



function App() {


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Homepage />
          <Footer />
        </Route>
      </Switch>
      {/* <Switch>
        <Route path="/skills">
          <Skills />
        </Route>
      </Switch>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch> */}
    </BrowserRouter>
  )






}

export default App
