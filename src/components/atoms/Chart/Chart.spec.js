import React from 'react'
import { shallow } from 'enzyme'
import Chart from './Chart'

describe('<Chart />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Chart />)).not.toThrow()
  })

  it('accepts any extra classes', () => {
    expect(shallow(<Chart className="my-chart" />).hasClass('my-chart')).toBe(
      true,
    )
  })
})
