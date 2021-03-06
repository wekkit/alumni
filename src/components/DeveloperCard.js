import React, { Component } from 'react'
import $ from 'jquery'

class DeveloperCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      githubInfo: {}
    }
  }

  componentDidMount() {
    $.get('https://api.github.com/users/'+ this.props.person.githubLogin + '?access_token=beb047469c874159724f9f479ab184ce22d9a164')
      .done((data) => {
        this.setState({
          githubInfo: data
        })
      })
  }

  render() {
    return (
      <div className='card card-developer' onClick={this.props.onClick}>
        <img src={this.state.githubInfo.avatar_url} id={this.state.githubInfo.login} alt='' className='card-img-top'></img>
        <div className='card-block'>
          <div className='card-title'><h2>{this.props.person.githubLogin}</h2></div>
          <p className='card-text'>{this.state.githubInfo.name}</p>
        </div>
        <div className='card-footer'>
          <a href={this.state.githubInfo.html_url}><small className='text-muted'>View Github profile</small></a><br/>
          {this.state.githubInfo.blog && <a href={this.state.githubInfo.blog}><small className='text-muted'>View blog</small></a>}
        </div>
      </div>
    )
  }
}

export default DeveloperCard