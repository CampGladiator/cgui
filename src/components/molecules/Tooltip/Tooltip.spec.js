import React from 'react'
import { shallow, mount } from 'enzyme'
import Tooltip from './Tooltip'

describe('<Tooltip />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Tooltip />)).not.toThrow()
  })

  it('tooltip accepts any extra classes', () => {
    expect(
      shallow(<Tooltip className="my-tooltip" />).hasClass('my-tooltip'),
    ).toBe(true)
  })

  it('renders the tooltip with class', () => {
    const renderedComponent = mount(<Tooltip />)
    expect(renderedComponent.find('.cg-tooltip').length).toBe(1)
  })

  it('renders the tooltip with `div` element', () => {
    const renderedComponent = mount(<Tooltip as="div" />)
    expect(renderedComponent.find('div').length).toBe(1)
  })

  it('tooltip trigger accepts any extra classes', () => {
    expect(
      shallow(<Tooltip.Trigger className="my-tooltip-trigger" />).hasClass(
        'my-tooltip-trigger',
      ),
    ).toBe(true)
  })

  it('renders the tooltip trigger with class', () => {
    const renderedComponent = mount(<Tooltip.Trigger />)
    expect(renderedComponent.find('.cg-tooltip__trigger').length).toBe(1)
  })

  it('renders the tooltip trigger with `label` element', () => {
    const renderedComponent = mount(<Tooltip.Trigger as="label" />)
    expect(renderedComponent.find('label').length).toBe(1)
  })

  it('tooltip content accepts any extra classes', () => {
    expect(
      shallow(<Tooltip.Content className="my-tooltip-content" />).hasClass(
        'my-tooltip-content',
      ),
    ).toBe(true)
  })

  it('renders the tooltip content with class', () => {
    const renderedComponent = mount(<Tooltip.Content />)
    expect(renderedComponent.find('.cg-tooltip__content').length).toBe(1)
  })

  it('renders the tooltip trigger with `div` element', () => {
    const renderedComponent = mount(<Tooltip.Content as="div" />)
    expect(renderedComponent.find('div').length).toBe(1)
  })

  it('renders the tooltip with fixed class', () => {
    const renderedComponent = mount(<Tooltip fixed />)
    expect(renderedComponent.find('.cg-tooltip--fixed').length).toBe(1)
  })
})
