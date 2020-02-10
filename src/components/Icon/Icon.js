import React from 'react'
import PropTypes from 'prop-types'
import mods from '../../utility/mods'
import './Icon.scss'

const Icon = ({
  className = '',
  name,
  size,
  ariaHidden = true,
  style = {},
  primary,
  secondary,
  dark,
  gray,
  white,
  ...props
}) => (
  <i
    className={mods(
      'cg-icon',
      {
        primary,
        secondary,
        dark,
        gray,
        white,
      },
      `cg-icon--${name}`,
      className,
    )}
    style={{ fontSize: `${size}px`, ...style }}
    aria-hidden={ariaHidden}
    {...props}
  />
)

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  ariaHidden: PropTypes.bool,
}

export default Icon
