import React from 'react'
import { shallow } from 'enzyme'
import App from './App'


describe ('App', () => {
  const app = shallow(<App />)

  it('render correctly', () => {
    expect(app).toMatchSnapshot()
  });

  it('initialize state with an empty list of gifts', () => {
    expect(app.state().gitfs).toEqual([])
  })

 describe ('', () => {
  beforeEach(() => {
    app.find('.btn-add').simulate('click')
  })

  afterEach(() => {
    app.setState({ gitfs: [] })
  })

  it('adds a new gift to state when clicking the add gifit is clicked', () => {
     expect(app.state().gitfs).toEqual([{id: 1}])
   })

   it ('add new gift on a rendered list of gifts', () => {
     expect(app.find('.gift-list').children().length).toEqual(1)
   })
 })

})

// dit  etq  | det

// describe ('', () => {
//   it('', () => {

//   });
// });