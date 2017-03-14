import React, { Component } from 'react'
import { IndexLink } from 'react-router'
import $ from 'jquery'

import * as data from '../data.json'
import Filters from './Filters'
import ProjectCard from './ProjectCard'

let duplicateCheck = []
const projectData = data.default.reduce((accum, elem) => {

        elem.project1.project = 1
        elem.project1.creator = elem.githubLogin
        accum.push(elem.project1)

        elem.project2.project = 2
        elem.project2.creator = elem.githubLogin
        accum.push(elem.project2)

        elem.project3.project = 3
        elem.project3.collaborators.push(elem.githubLogin)
        elem.project3.creator = elem.project3.collaborators.join(', ')
        let indexCheck = 0
        elem.project3.collaborators.forEach((e) => {
          duplicateCheck.forEach(check => {
            if (e === check) indexCheck++
          })
        })
        if (indexCheck === 0) {
          duplicateCheck = duplicateCheck.concat(elem.project3.collaborators)
          accum.push(elem.project3)
        }

        return accum
      }, [])

class ProjectsView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectData: projectData,
      projectFilter: [],
      projectSearch: '',
      selectedProject: null
    }
  }

  filterHandler(e) {
    const newFilter = this.state.projectFilter
    const changedValue = parseInt(e.target.value, 0)
    const index = this.state.projectFilter.indexOf(changedValue)
    if (index >= 0) {
      newFilter.splice(index, 1)
    } else {
      newFilter.push(changedValue)
    }
    this.setState({
      projectFilter: newFilter
    })
    let filteredData = projectData.filter(data => {
      return data.repoName.toLowerCase().includes(this.state.projectSearch.toLowerCase())
    })
    for (let i = 0; i < this.state.projectFilter.length; i++) {
      filteredData = filteredData.filter((elem) => {
        if (elem.project === this.state.projectFilter[i]) return false
        else return true
      })
    }
    this.setState({
      projectData: filteredData
    })
  }

  searchHandler(e) {
    this.setState({ projectSearch: e.target.value })
    let filteredData = projectData.filter(data => {
      return data.repoName.toLowerCase().includes(e.target.value.toLowerCase())
    })
    for (let i = 0; i < this.state.projectFilter.length; i++) {
      filteredData = filteredData.filter((elem) => {
        if (elem.project === this.state.projectFilter[i]) return false
        else return true
      })
    }
    this.setState({ projectData: filteredData })
  }

  clickHandler(e) {
    const clickedProject = JSON.parse(e.target.id)
    if (clickedProject.project !==  3) {
      $.get('https://api.github.com/repos/'+ clickedProject.creator + '/' + clickedProject.repoName + '/readme?access_token=beb047469c874159724f9f479ab184ce22d9a164')
        .done((data) => {
          $.get(data.download_url)
            .done(readme => {
              clickedProject.readme = readme
              this.setState({
                selectedProject: clickedProject
              })
            })
        })
    } else {
      $.get('https://api.github.com/repos/'+ clickedProject.creator.split(',')[0] + '/' + clickedProject.repoName + '/readme?access_token=beb047469c874159724f9f479ab184ce22d9a164')
        .done((data) => {
          $.get(data.download_url)
            .done(readme => {
              clickedProject.readme = readme
              this.setState({
                selectedProject: clickedProject
              })
            })
        })
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 pane'>
            <Filters
              filterHandler={this.filterHandler.bind(this)}
              searchHandler={this.searchHandler.bind(this)}
              selectedProject={this.state.selectedProject}
            />
          </div>

          <div className='col-md-7 scroll-section'>
            <hr/>
            <h1>These are WDI7's projects.</h1>
            <IndexLink to='/' className='btn btn-primary'>View Developers</IndexLink>
            <hr/>

            {
              (this.state.projectSearch.length > 0) &&
                <p>Searching: {this.state.projectSearch}</p>
            }

            <div className='card-columns'>
              {
                this.state.projectData.map((elem, i) => {
                  return <ProjectCard
                            project={elem}
                            key={i}
                            clickHandler={this.clickHandler.bind(this)}
                          />
                })
              }
            </div>

          </div>
        </div>
      </div>
    )
  }

}

export default ProjectsView
