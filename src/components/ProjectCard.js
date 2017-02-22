import React, { Component } from 'react'
// import $ from 'jquery'

class ProjectCard extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     imageUrl: ''
  //   }
  // }

  // componentDidMount() {
  //   if (!this.props.project.previewImage) {
  //     let githubUser = this.props.project.creator
  //     if (this.props.project.project === 3) {
  //       githubUser = this.props.project.creator.split(',')[0]
  //     }

  //     $.get('https://api.github.com/users/'+ githubUser + '?access_token=beb047469c874159724f9f479ab184ce22d9a164')
  //       .done((data) => {
  //         this.setState({
  //           imageUrl: data.avatar_url
  //         })
  //       })
  //       .fail((err) => {console.log(err)})
  //   }
  // }

  render() {
      return (
          <div className='card card-project'>
            <a href={this.props.project.deployedUrl} target='_blank'><h4 className='card-header'>{this.props.project.repoName}</h4></a>
            {this.props.project.previewImage && <img src={this.props.project.previewImage} alt='Not found' className='img-thumbnail' />}
            <div className='card-footer'>
              <p className='card-text'><small>Project {this.props.project.project} by {this.props.project.creator}</small></p>
            </div>
          </div>
      )
  }
}

export default ProjectCard
