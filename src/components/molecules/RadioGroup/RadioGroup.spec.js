import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import RadioGroup from './RadioGroup'

const radioOptions = [
  {
    label: 'option 1',
    value: 'id1',
  },
  {
    label: 'option 2',
    value: 'id2',
  },
  {
    label: 'option 3',
    value: 'id3',
  },
]

describe('<RadioGroup />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<RadioGroup options={radioOptions} />)).not.toThrow()
  })

  it('accepts any extra classes', () => {
    expect(
      shallow(
        <RadioGroup className="my-radio-group" options={radioOptions} />,
      ).hasClass('my-radio-group'),
    ).toBe(true)
  })

  it('renders button with provided content', () => {
    const renderedComponent = mount(<RadioGroup options={radioOptions} />)
      .find('input')
      .at(0)
      .prop('value')
    expect(renderedComponent).toBe('id1')
  })

  it('passes `onChange` handler from <Radio> up to <RadioGroup> when radio button is clicked', () => {
    const e = { target: { value: 'id1' } }
    const handleOnChange = sinon.spy()

    shallow(<RadioGroup options={radioOptions} onChange={handleOnChange} />)
      .find('Radio')
      .at(0)
      .simulate('change', e)
    expect(handleOnChange).toHaveProperty('callCount', 1)
  })
})
