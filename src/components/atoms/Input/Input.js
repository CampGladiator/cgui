import React from 'react'
import PropTypes from 'prop-types'
import './Input.scss'

const Input = ({ className='', ...props }) => (
  <input className={`cg-input ${className}`} {...props} />
)

Input.propTypes = {
  className: PropTypes.string,
}

export default Input
