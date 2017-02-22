import React, { Component } from 'react'
import * as data from './data.json'
import Card from './components/Card'
// import Filters from './components/Filters'
import Profile from './components/Profile'
import './App.css'
import './bg.css'

class App extends Component {
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

  // filter(e) {
  //   let clickedValue = e.target.value
  //   let filters = this.state.data.map(e => e.githubLogin)
  //   let index = filters.indexOf(clickedValue)
  //   // console.log('clicked:', clickedValue)
  //   // console.log('filters:', filters)
  //   // console.log('index:', index)
  //   if (index >= 0) {
  //     console.log('removed from data:', clickedValue)
  //     this.setState({
  //       data: this.state.data.filter(e => {
  //                 if (e.githubLogin === clickedValue) return false
  //                 else return true
  //               })
  //     })
  //   } else {
  //     const addedUser = data.default.filter(e => {
  //       if (e.githubLogin === clickedValue) return true
  //       else return false
  //     })[0]
  //     console.log('adding to data:', addedUser)
  //     const newData = this.state.data
  //     newData.push(addedUser)
  //     console.log('new data:', newData)
  //     this.setState({
  //       data: newData
  //     })
  //   }
  // }

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
        <h1>This is WDI7.</h1>
        <hr/>
        <div className='row'>

          <div className='card-deck scroll-section col-md-7'>
            {this.state.data.map((elem, i) => {
              return (
                <Card key={i} person={elem} onClick={this.cardClickHandler.bind(this)}/>
              )
            })}
          </div>

          <div className='col-md-5'>
            <Profile data={this.state.profileUser} />
          </div>

        </div>
      </div>
    )
  }
}


export default App;
