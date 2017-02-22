import React, { Component } from 'react'
import * as data from './data.json'
import Card from './components/Card'
import './App.css'
import './bg.css'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data.default
    }
  }

  render() {
    return (
      <div className='container'>
      <h1>This is WDI7.</h1>
      <hr/>
      <div className='card-deck'>
          {this.state.data.map((elem, i) => {
            return (
              <Card key={i} person={elem} />
            )
          })}
      </div>
      </div>
    )
  }
}


export default App;
