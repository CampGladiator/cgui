import React from 'react'
import { shallow } from 'enzyme'
import Callout from './Callout'

describe('<Callout />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Callout />)).not.toThrow()
  })

  it('accepts any extra classes', () => {
    expect(
      shallow(<Callout className="callout-text" />).hasClass('callout-text'),
    ).toBe(true)
  })

  it('displays the content', () => {
    expect(shallow(<Callout>HYLQ6893</Callout>).text()).toBe('HYLQ6893')
  })
})
