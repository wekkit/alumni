import React, { Component } from 'react'
import $ from 'jquery'

class ProjectCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      readme: ''
    }
  }

  componentDidMount() {

  }

  getReadme() {
    if (this.props.project.project !==  3) {
      $.get('https://api.github.com/repos/'+ this.props.project.creator + '/' + this.props.project.repoName + '/readme?access_token=beb047469c874159724f9f479ab184ce22d9a164')
        .done((data) => {
          $.get(data.download_url)
            .done(readme => {
              this.setState({
                readme: readme
              })
            })
        })
    }
  }

  render() {
      return (
          <div className='card card-project'>
            <h4 className='card-header' style={{ cursor: 'pointer' }} onClick={this.props.clickHandler} id={JSON.stringify(this.props.project)}>{this.props.project.repoName}</h4>
            {this.props.project.previewImage && <img src={this.props.project.previewImage} alt='Not found' className='img-thumbnail' />}
            <div className='card-footer'>
              <p className='card-text'><small>Project {this.props.project.project} by {this.props.project.creator}</small></p>
            </div>
          </div>
      )
  }
}

export default ProjectCard
