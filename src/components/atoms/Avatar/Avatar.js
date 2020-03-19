import React from 'react'
import PropTypes from 'prop-types'
import './Avatar.scss'

const Avatar = ({ size, className, style, ...props }) => (
  <img
    className={`cg-avatar ${className}`}
    style={{ width: size, height: size, ...style }}
    {...props}
  />
)

const placeholderImage =
  'https://cgcdn.s3.amazonaws.com/global-ui/images/avatars/placeholder.png'

Avatar.defaultProps = {
  src: placeholderImage,
  alt: 'user image',
  size: '48px',
  className: '',
  style: '',
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.Object,
}

export default Avatar
