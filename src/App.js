import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import MyLoadable from './utils/MyLoadable'

const DefaultLayout = MyLoadable(() => import('containers/DefaultLayout'))

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
