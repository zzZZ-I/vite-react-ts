import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './layout/silder/index'

import './less/App.css'

import router from './router'

function App() {
  return (
    <Router>
      <Layout />
      <Switch>
        {router.map((route) => (
          <Route exact key={route.path} path={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Router>
  )
}

export default App
