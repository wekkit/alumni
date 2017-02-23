import React, { Component } from 'react'
import { IndexLink } from 'react-router'
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
      projectSearch: ''
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

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 pane'>
            <Filters filterHandler={this.filterHandler.bind(this)} searchHandler={this.searchHandler.bind(this)}/>
          </div>

          <div className='col-md-9 scroll-section'>
            <hr/>
            <h1>These are WDI7's projects.</h1>
            <IndexLink to='/' className='btn btn-primary'>View Developers</IndexLink>
            <hr/>
            <div className='card-columns'>
              {this.state.projectData.map((elem, i) => {
                return <ProjectCard project={elem} key={i} />
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ProjectsView
