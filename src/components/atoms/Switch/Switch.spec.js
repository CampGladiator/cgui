import React from 'react'
import { shallow } from 'enzyme'
import Switch from './Switch'

describe('<Switch />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<
Switch id="test" />)).not.toThrow()
  })

  it('is checked when the checked prop is passed', () => {
    expect(
      shallow(<Switch id="test" checked />)
        .find('input[type="checkbox"]')
        .props().defaultChecked,
    ).toEqual(true)
  })
})
