import React from 'react'
import { shallow } from 'enzyme'
import ProductImage from './ProductImage'

const cdnBaseUrl =
  'https://cgcdn.s3.amazonaws.com/global-ui/images/Elements/Image'

const defaultImages = {
  bold: `${cdnBaseUrl}/Bold.png`,
  single: `${cdnBaseUrl}/Single+Camp.png`,
  owf: `${cdnBaseUrl}/One+Week+Free.png`,
  default: `${cdnBaseUrl}/Image+Not+Available.png`,
}

const customImage =
  'https://en.gravatar.com/userimage/32884912/b318719acf13489f60cba203b71e4d15.png?size=200'

describe('<ProductImage />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<ProductImage />)).not.toThrow()
  })

  it('allows user-provided classes', () => {
    expect(
      shallow(<ProductImage className="test-class" />)
        .find('.cg-product-image')
        .hasClass('test-class'),
    ).toBe(true)
  })

  it('renders with bold image', () => {
    expect(
      shallow(<ProductImage type="bold" />)
        .find('img')
        .prop('src'),
    ).toEqual(defaultImages.bold)
  })

  it('renders with single camp image', () => {
    expect(
      shallow(<ProductImage type="single" />)
        .find('img')
        .prop('src'),
    ).toEqual(defaultImages.single)
  })

  it('renders with one week free image', () => {
    expect(
      shallow(<ProductImage type="owf" />)
        .find('img')
        .prop('src'),
    ).toEqual(defaultImages.owf)
  })

  it('renders with default image when no image is provided', () => {
    expect(
      shallow(<ProductImage />)
        .find('img')
        .prop('src'),
    ).toEqual(defaultImages.default)
  })

  it('allows user-provided custom image', () => {
    expect(
      shallow(<ProductImage src={customImage} />)
        .find('img')
        .prop('src'),
    ).toEqual(customImage)
  })

  it('allows user-provided alt text', () => {
    expect(
      shallow(<ProductImage alt="test alt text" />)
        .find('img')
        .prop('alt'),
    ).toEqual('test alt text')
  })
})
