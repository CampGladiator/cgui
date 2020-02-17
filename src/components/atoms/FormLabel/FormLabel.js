import React from 'react'
import PropTypes from 'prop-types'
import './FormLabel.scss'

const FormLabel = ({ children, className, ...props }) => (
  <label className={`cg-label ${className}`} {...props}>
    {children}
  </label>
)

FormLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default FormLabel
