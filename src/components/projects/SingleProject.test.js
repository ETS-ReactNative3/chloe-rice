import React from 'react'
import ReactDOM from 'react-dom'
import SingleProject from './SingleProject'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SingleProject />, div)
})
