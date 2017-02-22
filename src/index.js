import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import ReactDOM from 'react-dom'
// import App from './App'
import DevelopersView from './components/DevelopersView'
import ProjectsView from './components/ProjectsView'
import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={DevelopersView}/>
    <Route path='/projects' component={ProjectsView} />
  </Router>,
  document.getElementById('root')
)
