import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import ButtonGroup from './ButtonGroup'

const content = { left: 'Test Left', right: 'Test Right' }

describe('<ButtonGroup />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<ButtonGroup content={content} />)).not.toThrow()
  })

  it('accepts any extra classes', () => {
    expect(
      shallow(
        <ButtonGroup className="my-button-group" content={content} />,
      ).hasClass('my-button-group'),
    ).toBe(true)
  })

  it('renders button with provided content', () => {
    const renderedComponent = mount(<ButtonGroup content={content} />)
      .find('Button')
      .at(0)
      .text()
    expect(renderedComponent).toBe('Test Left')
  })

  it('passes `onClick` handler from left button child up to parent group', () => {
    const e = { target: { dataset: { id: 'left' } } }
    const handleLeftClick = sinon.spy()

    shallow(
      <ButtonGroup handleOnLeftClick={handleLeftClick} content={content} />,
    )
      .find('Button')
      .at(0)
      .simulate('click', e)
    expect(handleLeftClick).toHaveProperty('callCount', 1)
  })

  it('passes `onClick` handler from right button child up to parent group', () => {
    const e = { target: { dataset: { id: 'right' } } }
    const handleRightClick = sinon.spy()

    shallow(
      <ButtonGroup handleOnRightClick={handleRightClick} content={content} />,
    )
      .find('Button')
      .at(1)
      .simulate('click', e)
    expect(handleRightClick).toHaveProperty('callCount', 1)
  })
})
