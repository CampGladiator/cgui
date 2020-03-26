import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import SetSelectorGroup from './SetSelectorGroup'

const selectorOptions = [
  {
    label: 'xs',
    value: 'xs',
  },
  {
    label: 'x',
    value: 'x',
  },
  {
    label: 'm',
    value: 'm',
  },
]
const defaultRadioVal = ['x']
const defaultCheckboxVal = ['x', 'xs']

describe('<SetSelectorGroup />', () => {
  it('renders radio set selector', () => {
    const handleOnChange = sinon.spy()
    const renderedComponent = shallow(
      <SetSelectorGroup
        options={selectorOptions}
        type="radio"
        defaultSelected={defaultRadioVal}
        onChange={handleOnChange}
      ></SetSelectorGroup>,
    )
    expect(() => renderedComponent).not.toThrow()
  })

  it('renders checkbox options set selector', () => {
    const handleOnChange = sinon.spy()
    expect(() =>
      shallow(
        <SetSelectorGroup
          options={selectorOptions}
          type="checkbox"
          defaultSelected={defaultCheckboxVal}
          onChange={handleOnChange}
        ></SetSelectorGroup>,
      ),
    ).not.toThrow()
  })

  it('validates type radio and selected to be true', () => {
    const handleOnChange = sinon.spy()
    const renderedComponent = shallow(
      <SetSelectorGroup
        options={selectorOptions}
        type="radio"
        defaultSelected={defaultRadioVal}
        onChange={handleOnChange}
      ></SetSelectorGroup>,
    )
      .find('SetSelector')
      .at(1)
    expect(renderedComponent.prop('type')).toBe('radio')
    expect(renderedComponent.prop('selected')).toBe(true)
  })

  it('validates type checkbox and selected to be true', () => {
    const handleOnChange = sinon.spy()
    const renderedComponent = shallow(
      <SetSelectorGroup
        options={selectorOptions}
        type="checkbox"
        defaultSelected={defaultCheckboxVal}
        onChange={handleOnChange}
      ></SetSelectorGroup>,
    )
      .find('SetSelector')
      .at(0)
    expect(renderedComponent.prop('type')).toBe('checkbox')
    expect(renderedComponent.prop('selected')).toBe(true)
  })
})
