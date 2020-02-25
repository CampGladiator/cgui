import React from 'react'
import { shallow } from 'enzyme'
import Checkbox from './Checkbox'

describe('<Checkbox />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Checkbox id="test" />)).not.toThrow()
  })

  it('is checked when the checked prop is passed', () => {
    expect(
      shallow(<Checkbox id="test" checked />)
        .find('input[type="checkbox"]')
        .props().defaultChecked,
    ).toEqual(true)
  })
})
