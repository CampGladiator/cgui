import React from 'react'
import PropTypes from 'prop-types'
import './Avatar.scss'

const Avatar = ({ image, alt, size, className, style, ...props }) => (
  <img
    src={image}
    alt={alt}
    className={`cg-avatar ${className}`}
    style={{ width: size, height: size, ...style }}
    {...props}
  ></img>
)

const placeholderImage =
  'https://cgcdn.s3.amazonaws.com/global-ui/images/avatars/placeholder.png'

Avatar.defaultProps = {
  image: placeholderImage,
  alt: 'user image',
  size: '48px',
  className: '',
  style: '',
}

Avatar.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.string,
}

export default Avatar
