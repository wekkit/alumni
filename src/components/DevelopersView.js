import React, { Component } from 'react'
import * as data from '../data.json'
import Card from './Card'
import Profile from './Profile'
import '../App.css'
import '../bg.css'

class DevelopersView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data.default,
      filters: data.default.reduce((accum, e) => {
                  accum.push(e.githubLogin)
                  return accum
                }, []),
      users: data.default.map(e => {
                return e.githubLogin
              }),
      profileUser: data.default[0]
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
    // <Filters data={this.state.users} changeHandler={this.filter.bind(this)} />
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-7 scroll-section'>
            <hr/>
            <h1>This is WDI7.</h1>
            <hr/>
            <div className='card-deck'>
              {this.state.data.map((elem, i) => {
                return (
                  <Card key={i} person={elem} onClick={this.cardClickHandler.bind(this)}/>
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
