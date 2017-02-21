import React, { Component } from 'react'
import $ from 'jquery'

class RepoLink extends Component {
  render() {
    return(
      <a href={this.props.project.deployedUrl} target='_blank'><p className='card-text'>{this.props.project.repoName}</p></a>
    )
  }
}

export class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      githubInfo: {}
    }
  }

  componentWillMount() {
    $.get('https://api.github.com/users/'+ this.props.person.githubLogin + '?access_token=beb047469c874159724f9f479ab184ce22d9a164')
      .done((data) => {
        this.setState({
          githubInfo: data
        })
      })
      .fail((err) => {console.log(err)})
  }

  render() {
    return (
      <div className='card'>
        <img src={this.state.githubInfo.avatar_url} alt='' className='card-img-top img-responsive center-block'></img>
        <div className='card-block'>
          <div className='card-title'><h2>{this.props.person.githubLogin}</h2></div>
          <p className='card-text'>{this.state.githubInfo.name}</p>
          <RepoLink project={this.props.person.project1} />
          <RepoLink project={this.props.person.project2} />
          <RepoLink project={this.props.person.project3} />
        </div>
        <div className='card-footer'>
          <a href={this.state.githubInfo.url}><small class='text-muted'>View Github profile</small></a><br/>
          <a href={this.state.githubInfo.blog}><small class='text-muted'>View blog</small></a>
        </div>
      </div>
    )
  }
}

export default Card