import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import ReactDOM from 'react-dom'
import DevelopersView from './components/DevelopersView'
import ProjectsView from './components/ProjectsView'
import './index.css'
import './bg.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={DevelopersView}/>
    <Route path='/projects' component={ProjectsView} />
  </Router>,
  document.getElementById('root')
)
