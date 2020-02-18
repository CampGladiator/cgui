import React from 'react'
import { shallow } from 'enzyme'
import Fieldset from './Fieldset'

describe('<Fieldset />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Fieldset />)).not.toThrow()
  })
})
