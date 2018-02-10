import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Home from '../views/Home.js'

import NotFound from '../views/NotFound.js'




const Routes = () => {
  return (
    <BrowserRouter>
       <Switch>
          <Route exact path='/' render={() => <h1>HOME PAGE</h1>} />
          <Route render= {() => <h1>NOT FOUND PAGE</h1>} />
       </Switch> 
    </BrowserRouter>
  )
}

export default Routes