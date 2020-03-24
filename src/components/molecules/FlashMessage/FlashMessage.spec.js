import React from 'react'
import { shallow, mount } from 'enzyme'
import FlashMessage from './FlashMessage'
import Button from '../../atoms/Button/Button'

const text = 'This is a Flash message'
describe('<FlashMessage />', () => {
  it('renders <FlashMessage/> without crashing', () => {
    expect(() => shallow(<FlashMessage />)).not.toThrow()
  })

  it('accepts <FlashMessage/> with any extra classes', () => {
    expect(
      shallow(<FlashMessage className="test-class" />)
        .find('.cg-flash-message')
        .hasClass('test-class'),
    ).toBe(true)
  })

  it('renders <FlashMessage /> with correct class name', () => {
    expect(shallow(<FlashMessage />).hasClass('cg-flash-message')).toBe(true)
  })

  it('renders <FlashBadge /> with correct class name', () => {
    const renderedComponent = mount(<FlashMessage count={1} />)
    expect(renderedComponent.find('.cg-flash-message__badge').length).toBe(1)
  })

  it('renders <FlashContent /> with correct class name', () => {
    const renderedComponent = mount(<FlashMessage text={text} />)
    expect(renderedComponent.find('.cg-flash-message__content').length).toBe(1)
  })

  it('renders <Icon /> with correct class name', () => {
    const renderedComponent = mount(<FlashMessage count={4} text={text} />)
    expect(renderedComponent.find('.cg-icon').length).toBe(1)
  })

  it('renders <Icon /> with correct class name', () => {
    const renderedComponent = mount(
      <FlashMessage count={4} text={text} show={true} />,
    )
    expect(renderedComponent.find('.cg-icon').length).toBe(1)
  })

  it('renders child with correct class name', () => {
    const renderedComponent = mount(
      <FlashMessage count={4} text={text} show={true}>
        <Button>Action</Button>
      </FlashMessage>,
    )
    expect(renderedComponent.find('.cg-button').length).toBe(1)
  })

  it('does not render <FlashMessage />', () => {
    const renderedComponent = shallow(<FlashMessage show={false} />)
    expect(renderedComponent.find('.cg-flash-message').length).toBe(0)
  })
})
