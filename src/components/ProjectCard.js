import React, { Component } from 'react'

class ProjectCard extends Component {
  render() {
      return (
          <div className='card card-project'>
            <h4
              className='card-header'
              style={{ cursor: 'pointer' }}
              onClick={this.props.clickHandler}
              id={JSON.stringify(this.props.project)}
            >
              {this.props.project.repoName}
            </h4>

            {
              this.props.project.previewImage &&
                <img src={this.props.project.previewImage} alt='Not found' className='img-thumbnail' />
            }

            <div className='card-footer'>
              <p className='card-text'><small>Project {this.props.project.project} by {this.props.project.creator}</small></p>
            </div>
          </div>
      )
  }
}

export default ProjectCard
