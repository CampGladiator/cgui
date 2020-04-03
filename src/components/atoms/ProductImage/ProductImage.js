import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './ProductImage.scss'

const cdnBaseUrl =
  'https://cgcdn.s3.amazonaws.com/global-ui/images/Elements/Image'

const defaultImages = {
  bold: `${cdnBaseUrl}/Bold.png`,
  single: `${cdnBaseUrl}/Single+Camp.png`,
  owf: `${cdnBaseUrl}/One+Week+Free.png`,
  default: `${cdnBaseUrl}/Image+Not+Available.png`,
}

const ProductImage = memo(
  ({ src, type, alt, size, className, style, ...props }) => {
    const imageSource = () =>
      src ? src : type ? defaultImages[type] : defaultImages.default

    return (
      <img
        src={imageSource()}
        alt={alt}
        className={`cg-product-image ${className}`}
        style={{ width: size, height: size, ...style }}
        {...props}
      />
    )
  },
)

ProductImage.defaultProps = {
  type: 'default',
  size: '80px',
  alt: 'product image',
  className: '',
  style: {},
}

ProductImage.propTypes = {
  custom: PropTypes.string,
  type: PropTypes.oneOf(['bold', 'single', 'owf', 'default']),
  alt: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
}

export default ProductImage
