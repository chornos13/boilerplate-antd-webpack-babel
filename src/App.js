import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { LoadComponent } from './utils/MyLoadable'

const DefaultLayout = LoadComponent(() => import('containers/DefaultLayout'))

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" name="Home" component={DefaultLayout} />
      </Switch>
    </Router>
  )
}

export default App
