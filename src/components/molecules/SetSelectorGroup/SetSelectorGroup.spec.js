import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import SetSelectorGroup from './SetSelectorGroup'

let selectorRadioOptions = [
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
let defaultRadioVal = ['x']

describe('<SetSelectorGroup />', () => {
  it('renders without crashing', () => {
    expect(() =>
      shallow(
        <SetSelectorGroup
          options={selectorRadioOptions}
          type="radio"
          defaultSelected={defaultRadioVal}
        ></SetSelectorGroup>,
      ),
    ).not.toThrow()
  })
})
