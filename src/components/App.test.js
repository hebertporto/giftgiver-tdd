import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const app = shallow(<App />)

it('render correctly', () => {
  expect(app).toMatchSnapshot()
});

it('initialize state with an empty list of gifts', () => {
  expect(app.state().gitfs).toEqual([])
})

it('adds a new gift to state when clicking the add gifit is clicked', () => {
  app.find('.btn-add').simulate('click')
  expect(app.state().gitfs).toEqual([{id: 1}])
})