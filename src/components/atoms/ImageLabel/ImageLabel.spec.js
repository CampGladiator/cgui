import React from 'react'
import { shallow } from 'enzyme'
import ImageLabel from './ImageLabel'

describe('<ImageLabel />', () => {
  it('renders without crashing', () => {
    expect(
      shallow(<ImageLabel />)
        .find('.cg-image-label')
        .hasClass('cg-image-label--topRight'),
    ).toBe(true)
  })

  it('renders with additional user-provided classes', () => {
    expect(
      shallow(<ImageLabel className={'test-class1 test-class2'} />)
        .find('.cg-image-label')
        .hasClass('test-class1 test-class2'),
    ).toBe(true)
  })

  it('renders with correct class for top left label', () => {
    expect(
      shallow(<ImageLabel position="topLeft" />)
        .find('.cg-image-label')
        .hasClass('cg-image-label--topLeft'),
    ).toBe(true)
  })

  it('renders with correct class for top right label', () => {
    expect(
      shallow(<ImageLabel position="topRight" />)
        .find('.cg-image-label')
        .hasClass('cg-image-label--topRight'),
    ).toBe(true)
  })

  it('renders with correct class for bottom left label', () => {
    expect(
      shallow(<ImageLabel position="bottomLeft" />)
        .find('.cg-image-label')
        .hasClass('cg-image-label--bottomLeft'),
    ).toBe(true)
  })

  it('renders with correct class for bottom right label', () => {
    expect(
      shallow(<ImageLabel position="bottomRight" />)
        .find('.cg-image-label')
        .hasClass('cg-image-label--bottomRight'),
    ).toBe(true)
  })

  it('renders with correct class for small label', () => {
    expect(
      shallow(<ImageLabel small />)
        .find('.cg-image-label')
        .hasClass('cg-image-label--small'),
    ).toBe(true)
  })

  it('renders with correct class for primary color label', () => {
    expect(
      shallow(<ImageLabel primary />)
        .find('.cg-image-label')
        .hasClass('cg-image-label--primary'),
    ).toBe(true)
  })

  it('renders with correct class for secondary color label', () => {
    expect(
      shallow(<ImageLabel secondary />)
        .find('.cg-image-label')
        .hasClass('cg-image-label--secondary'),
    ).toBe(true)
  })
})
