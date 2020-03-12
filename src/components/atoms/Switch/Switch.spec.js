import React from 'react'
import { shallow } from 'enzyme'
import Switch from './Switch'

describe('<Switch />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Switch />)).not.toThrow()
  })

  it('accepts any extra classes', () => {
    expect(
      shallow(<Switch className="my-switch" />).hasClass('my-switch'),
    ).toBe(true)
  })

  it('Switch defaults to off', () => {
    expect(
      shallow(<Switch />)
        .find('span')
        .hasClass('cg-switch__toggle--on'),
    ).toBe(false)
  })

  it('auto-on when defaultOn prop supplied', () => {
    expect(
      shallow(<Switch defaultOn />)
        .find('span')
        .hasClass('cg-switch__toggle--on'),
    ).toBe(true)
  })
})
