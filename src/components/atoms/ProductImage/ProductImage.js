import React from 'react'
import PropTypes from 'prop-types'
import './ProductImage.scss'

const cdnBaseUrl =
  'https://cgcdn.s3.amazonaws.com/global-ui/images/Elements/Image'

const ProductImage = ({
  src,
  bold,
  single,
  owf,
  alt,
  size,
  className,
  ...props
}) => {
  const defaultImages = {
    bold: `${cdnBaseUrl}/Bold.png`,
    single: `${cdnBaseUrl}/Single+Camp.png`,
    owf: `${cdnBaseUrl}/One+Week+Free.png`,
    default: `${cdnBaseUrl}/Image+Not+Available.png`,
  }

  const imageSource = !!custom ? custom : defaultImg

  return (
    <img
      src={imageSource}
      className={`cg-product-image ${className}`}
      {...props}
    />
  )
}

ProductImage.defaultProps = {
  alt: 'product image',
  className: '',
}

ProductImage.propTypes = {
  custom: PropTypes.string,
  size: PropTypes.oneOf(['']),
  alt: PropTypes.string,
  className: PropTypes.string,
}
