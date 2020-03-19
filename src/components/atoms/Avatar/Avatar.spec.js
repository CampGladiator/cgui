import React from 'react'
import { shallow } from 'enzyme'
import Avatar from './Avatar'

describe('<Avatar />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Avatar />)).not.toThrow()
  })

  
})
