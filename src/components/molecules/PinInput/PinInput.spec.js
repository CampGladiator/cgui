import React from 'react'
import { shallow, mount } from 'enzyme'
import PinInput from './PinInput'

describe('<PinInput />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<PinInput />)).not.toThrow()
  })

  it('render the slider component class', () => {
    expect(shallow(<PinInput />).hasClass('cg-pin-input')).toBe(true)
  })

  it('accepts any extra classes', () => {
    expect(
      shallow(<PinInput className="my-pin-input" />).hasClass('my-pin-input'),
    ).toBe(true)
  })

  it('renders the pin input part component class', () => {
    const renderedComponent = mount(<PinInput />)
    expect(renderedComponent.find('.cg-pin-input-part').length).toBe(4)
  })

  it('renders the pin input part component class with 6 inputs', () => {
    const renderedComponent = mount(<PinInput noOfInput={6} />)
    expect(renderedComponent.find('.cg-pin-input-part').length).toBe(6)
  })

  it('renders the pin input part component with correct value', () => {
    const renderedComponent = mount(<PinInput value="1234" />)
    expect(
      renderedComponent
        .find('.cg-pin-input-part')
        .at(0)
        .children()
        .get(0).props.value,
    ).toBe('1')
    expect(
      renderedComponent
        .find('.cg-pin-input-part')
        .at(1)
        .children()
        .get(0).props.value,
    ).toBe('2')
    expect(
      renderedComponent
        .find('.cg-pin-input-part')
        .at(2)
        .children()
        .get(0).props.value,
    ).toBe('3')
    expect(
      renderedComponent
        .find('.cg-pin-input-part')
        .at(3)
        .children()
        .get(0).props.value,
    ).toBe('4')
  })
})
