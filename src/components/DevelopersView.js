import React, { Component } from 'react'
import { Link } from 'react-router'
import * as data from '../data.json'
import DeveloperCard from './DeveloperCard'
import Profile from './Profile'
import '../App.css'

class DevelopersView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data.default,
      profileUser: null
    }
  }

  cardClickHandler(e) {
    const clickedUser = data.default.filter(elem => {
        if (elem.githubLogin.toString().toLowerCase() === e.target.id.toString().toLowerCase()) return true
        else return false
      })[0]
    this.setState({
      profileUser: clickedUser
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>

          <div className='col-md-7 scroll-section'>
            <hr/>
            <h1>This is WDI7.</h1>
            <Link to="/projects" className='btn btn-primary'>View Projects</Link>
            <hr/>
            <div className='card-deck'>
              {this.state.data.map((elem, i) => {
                return (
                  <DeveloperCard key={i} person={elem} onClick={this.cardClickHandler.bind(this)} />
                )
              })}
            </div>
          </div>

          <div className='col-md-5 pane'>
            <Profile data={this.state.profileUser} />
          </div>

        </div>
      </div>
    )
  }
}


export default DevelopersView;
