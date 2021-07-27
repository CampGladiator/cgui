import React from 'react'
import { shallow } from 'enzyme'
import Countdown from './Countdown'

describe('<Countdown />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Countdown endTime={2019621601000} />)).not.toThrow()
  })

  it('accepts additional classes', () => {
    expect(shallow(<Countdown className="test1" />).hasClass('test1')).toEqual(
      true,
    )
  })

  it('renders all time labels', () => {
    const component = shallow(<Countdown endTime={2019621601000} />)
    expect(component.text()).toContain('day')
    expect(component.text()).toContain('hour')
    expect(component.text()).toContain('min')
    expect(component.text()).toContain('day')
  })
})
