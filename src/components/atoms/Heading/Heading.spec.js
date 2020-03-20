import React from 'react'
import { shallow } from 'enzyme'
import Heading from './Heading'

describe('<Heading />', () => {
  it('should render the element with the correct classes', () => {
    expect(shallow(<Heading />).hasClass('cg-heading')).toBe(true)
  })

  it('should render primary color', () => {
    expect(shallow(<Heading primary />).hasClass('cg-heading--primary')).toBe(
      true,
    )
  })

  it('should render secondary color', () => {
    expect(
      shallow(<Heading secondary />).hasClass('cg-heading--secondary'),
    ).toBe(true)
  })

  it('should render dark color', () => {
    expect(shallow(<Heading dark />).hasClass('cg-heading--dark')).toBe(true)
  })

  it('should render gray color', () => {
    expect(shallow(<Heading gray />).hasClass('cg-heading--gray')).toBe(true)
  })

  it('should render white color', () => {
    expect(shallow(<Heading white />).hasClass('cg-heading--white')).toBe(true)
  })

  it('should render display font', () => {
    expect(
      shallow(<Heading font="display" />).hasClass('cg-heading__display'),
    ).toBe(true)
  })

  it('should render gotham font', () => {
    expect(
      shallow(<Heading font="primary" />).hasClass('cg-heading__primary'),
    ).toBe(true)
  })

  it('should render h1', () => {
    expect(
      shallow(<Heading type="h1" />).hasClass('cg-heading__primary--h1'),
    ).toBe(true)
  })

  it('should render h2', () => {
    expect(
      shallow(<Heading type="h2" />).hasClass('cg-heading__primary--h2'),
    ).toBe(true)
  })

  it('should render h3', () => {
    expect(
      shallow(<Heading type="h3" />).hasClass('cg-heading__primary--h3'),
    ).toBe(true)
  })

  it('should render h4', () => {
    expect(
      shallow(<Heading type="h4" />).hasClass('cg-heading__primary--h4'),
    ).toBe(true)
  })

  it('should render h5', () => {
    expect(
      shallow(<Heading type="h5" />).hasClass('cg-heading__primary--h5'),
    ).toBe(true)
  })

  it('should render h6', () => {
    expect(
      shallow(<Heading type="h6" />).hasClass('cg-heading__primary--h6'),
    ).toBe(true)
  })

  it('renders the text passed from the component', () => {
    expect(
      shallow(<Heading>Heading Test</Heading>)
        .find('.cg-heading')
        .text(),
    ).toBe('Heading Test')
  })

  it('allows passing user supplied class', () => {
    expect(
      shallow(<Heading className="test-class" />).hasClass('test-class'),
    ).toBe(true)
  })
})
