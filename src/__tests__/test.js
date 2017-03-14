import React from 'React'
import Link from 'react-router'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import * as data from '../data.json'

import Profile from '../components/Profile'
import DevelopersView from '../components/DevelopersView'
import ProjectsView from '../components/ProjectsView'

it('renders an empty profile correctly', () => {
  const tree = renderer.create(
    <Profile />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders with enzyme', () => {
  const devView = shallow(
    <DevelopersView data={data}/>
  )
  expect(devView.length).toBe(1)
})

it('has everyone\'s profile cards', () => {
  const devView = shallow(<DevelopersView />)
  expect(devView.find('DeveloperCard').length).toBe(15)
})

it('goes from developer view to project view', () => {
  const devView = shallow(<DevelopersView />)
  const projView = shallow(<ProjectsView />)
  devView.find('Link').simulate('click')
  expect(projView.length).toBe(1)
})

