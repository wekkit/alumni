import React, { Component } from 'react'

class RepoLink extends Component {
  render() {
      return (
        <div className='card mx-auto'>
          <a href={this.props.project.deployedUrl} target='_blank' className='card-header'>{this.props.header}: {this.props.project.repoName}</a>
          {this.props.project.previewImage && <img src={this.props.project.previewImage} alt='Not found' className='img-thumbnail' />}
        </div>
      )
  }
}

class Profile extends Component {
  render() {
    return (
      <div className='card scroll-section' id='profile'>
        <div className='card-block'>
          <h1>{this.props.data.githubLogin}</h1>
          <hr/>
          <RepoLink project={this.props.data.project1} header='Project 1' />
          <RepoLink project={this.props.data.project2} header='Project 2' />
          <RepoLink project={this.props.data.project3} header='Project 3' />
        </div>
      </div>
    )
  }
}

export default Profile