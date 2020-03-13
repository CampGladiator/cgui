import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import SetSelector from './SetSelector'

describe('<SetSelector />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<SetSelector />)).not.toThrow()
  })

  it('allows user-provided classes', () => {
    expect(
      shallow(<SetSelector className="test-class" />).hasClass('test-class'),
    ).toBe(true)
  })

  it('selected attribute auto-selects the element', () => {
    expect(
      shallow(<SetSelector selected />).hasClass(
        'cg-set-selector__item--selected',
      ),
    ).toBe(true)
  })

  it('clicking the element changes its selection status', () => {
    const element = shallow(<SetSelector>x</SetSelector>)
    expect(element.simulate('click'))
    expect(element.hasClass('cg-set-selector__item--selected')).toBe(true)
    expect(element.simulate('click'))
    expect(element.hasClass('cg-set-selector__item--selected')).toBe(false)
  })
})
