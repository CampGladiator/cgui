import React from 'react'
import { shallow, mount } from 'enzyme'
import Slider from './Slider'
import sinon from 'sinon'

describe('<Slider />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Slider />)).not.toThrow()
  })

  it('render the slider component class', () => {
    expect(shallow(<Slider />).hasClass('cg-slider')).toBe(true)
  })

  it('accepts any extra classes', () => {
    expect(
      shallow(<Slider className="my-slider" />).hasClass('my-slider'),
    ).toBe(true)
  })

  it('renders the slider range component class', () => {
    const renderedComponent = mount(<Slider />)
    expect(renderedComponent.find('.cg-slider__range').length).toBe(1)
  })

  it('renders the slider handle component class', () => {
    const renderedComponent = mount(<Slider />)
    expect(renderedComponent.find('.cg-slider__handle').length).toBe(1)
  })

  it('renders the slider handle component class twice for range slider', () => {
    const renderedComponent = mount(<Slider range />)
    expect(renderedComponent.find('.cg-slider__handle').length).toBe(2)
  })

  it('renders the slider disabled component class', () => {
    expect(shallow(<Slider disabled />).hasClass('cg-slider--disabled')).toBe(
      true,
    )
  })

  it('slider should call `onChange` handler', () => {
    const onChangeHandler = sinon.spy()
    const renderedComponent = mount(
      <Slider onChange={onChangeHandler} id="mySlider" />,
    )
    renderedComponent.find('div#mySlider').simulate('click')
    expect(onChangeHandler).toHaveProperty('callCount', 1)
  })

  it('renders the slider range width the correct value', () => {
    const renderedComponent = mount(<Slider value={20} />)
    expect(
      renderedComponent.find('.cg-slider__range').get(0).props.style.width,
    ).toBe('20%')
  })

  it('renders the slider handle range with correct value', () => {
    const renderedComponent = mount(<Slider value={[10, 90]} range />)
    expect(
      renderedComponent.find('.cg-slider__handle').get(0).props.style.left,
    ).toBe('10%')
    expect(
      renderedComponent.find('.cg-slider__handle').get(1).props.style.left,
    ).toBe('90%')
  })

  it('renders the slider handle range with `rangeDiff` props and correct value', () => {
    const renderedComponent = mount(
      <Slider value={[10, 90]} range rangeDiff={10} />,
    )
    expect(
      renderedComponent.find('.cg-slider__handle').get(0).props.style.left,
    ).toBe('10%')
    expect(
      renderedComponent.find('.cg-slider__handle').get(1).props.style.left,
    ).toBe('90%')
    renderedComponent.setProps({ value: [80, 90] })
    expect(
      renderedComponent.find('.cg-slider__handle').get(0).props.style.left,
    ).toBe('80%')
    expect(
      renderedComponent.find('.cg-slider__handle').get(1).props.style.left,
    ).toBe('90%')
  })

  it('renders the slider with label', () => {
    const renderedComponent = mount(<Slider value={10} />)
    expect(renderedComponent.find('.cg-slider__label').text()).toBe('10')
  })

  it('renders the range slider with label', () => {
    const renderedComponent = mount(<Slider value={[20, 80]} range />)
    expect(
      renderedComponent.find('.cg-slider__label').get(0).props.children,
    ).toBe(20)
    expect(
      renderedComponent.find('.cg-slider__label').get(1).props.children,
    ).toBe(80)
  })

  it('renders the slider with No label', () => {
    const renderedComponent = mount(<Slider value={10} showValue={false} />)
    expect(renderedComponent.find('.cg-slider__label').length).toBe(0)
  })

  it('renders the range slider with label with time format', () => {
    const renderedComponent = mount(
      <Slider value={[3, 17]} range showTimeFormat />,
    )
    expect(
      renderedComponent.find('.cg-slider__label').get(0).props.children,
    ).toBe('3:00AM')
    expect(
      renderedComponent.find('.cg-slider__label').get(1).props.children,
    ).toBe('5:00PM')
  })
})
