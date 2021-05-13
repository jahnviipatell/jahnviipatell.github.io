import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Skills from './components/Skills'



function App() {


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Switch>
          <Route path="/skills">
            <Skills />
          </Route>
        </Switch>
      </Switch>
    </BrowserRouter>
  )






}

export default App
