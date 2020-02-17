import React from 'react'
import PropTypes from 'prop-types'
import mods from '../../../utilities/mods'
import './Input.scss'

const Input = ({ centered, rounded, separator, className, ...props }) => (
  <input
    className={mods('cg-input', { centered, rounded, separator }, className)}
    {...props}
  />
)

Input.propTypes = {
  centered: PropTypes.bool,
  rounded: PropTypes.bool,
  separator: PropTypes.bool,
}

export default Input
