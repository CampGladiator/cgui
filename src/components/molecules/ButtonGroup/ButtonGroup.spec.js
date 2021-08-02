import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import ButtonGroup from './ButtonGroup'

const buttons = [
  { children: (<span>Left</span>) },
  { children: (<span>Middle</span>) },
  { children: (<span>Right</span>) },
]

describe('<ButtonGroup />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<ButtonGroup buttons={buttons} />)).not.toThrow()
  })

  it('accepts any extra classes', () => {
    expect(
      shallow(
        <ButtonGroup className="my-button-group" buttons={buttons} />,
      ).hasClass('my-button-group'),
    ).toBe(true)
  })

  it('renders group with provided buttons', () => {
    const renderedComponent = mount(<ButtonGroup buttons={buttons} />)
      .find('Button')
      .at(0)
      .text()
    expect(renderedComponent).toBe('Left')
  })

  it('passes `onClick` handler from button child up to parent group', () => {
    const e = { target: { dataset: { id: 'right' } } }
    const onButtonGroupSelection = sinon.spy()

    shallow(
      <ButtonGroup onSelect={onButtonGroupSelection} buttons={buttons} />,
    )
      .find('Button')
      .at(1)
      .simulate('click', e)
    expect(onButtonGroupSelection).toHaveProperty('callCount', 1)
  })
})
