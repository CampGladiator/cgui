import React from 'react'
import PropTypes from 'prop-types'
import './Avatar.scss'

const Avatar = ({ image, alt, width, className, style, ...props }) => (
  <img
    src={image}
    alt={alt}
    className={`cg-avatar ${className}`}
    style={{ width: width, height: width, ...style }}
    {...props}
  ></img>
)

const placeholderImage =
  'https://cgcdn.s3.amazonaws.com/global-ui/images/avatars/avatar-placeholder.png'

Avatar.defaultProps = {
  image: placeholderImage,
  alt: 'user image',
  width: '48px',
  className: '',
  style: '',
}

Avatar.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.string,
}

export default Avatar
