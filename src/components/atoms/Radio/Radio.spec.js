import React from 'react'
import { shallow } from 'enzyme'
import Radio from './Checkbox'

describe('<Radio />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Radio id="test" />)).not.toThrow()
  })

  it('is checked when the checked prop is passed', () => {
    expect(
      shallow(<Radio id="test" checked />)
        .find('input[type="checkbox"]')
        .props().defaultCqhecked,
    ).toEqual(true)
  })
})
