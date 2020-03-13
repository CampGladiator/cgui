import React from 'react'
import PropTypes from 'prop-types'
import './ImageLabel.scss'

const ImageLabel = ({
  position = 'topRight',
  small,
  primary,
  secondary,
  className,
  children,
  ...props
}) => (
  <legend
    className={`cg-image-label cg-image-label--${position} ${small &&
      'cg-image-label--small'} ${primary &&
      'cg-image-label--primary'} ${secondary && 'cg-image-label--secondary'} 
      ${className}`}
    {...props}
  >
    {children}
  </legend>
)

const Position = PropTypes.oneOf(['topRight', 'topLeft', 'bottomRight', 'bottomLeft'])

ImageLabel.propTypes = {
  position: Position,
  small: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default ImageLabel
