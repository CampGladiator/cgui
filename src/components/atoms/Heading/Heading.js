import React from 'react'
import PropTypes from 'prop-types'
import mods from '../../../utilities/mods'
import './Heading.scss'

const Heading = ({
  type,
  font,
  primary,
  secondary,
  dark,
  gray,
  white,
  children,
  className,
  ...props
}) => {
  const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  const setFont = font && font === 'display' ? 'display' : 'primary'
  const classes = mods(
    'cg-heading',
    { primary, secondary, dark, gray, white },
    `cg-heading__${setFont}`,
    `cg-heading__${setFont}--${type}`,
    className,
  )

  return headings.includes(type)
    ? React.createElement(type, { className: classes, ...props }, children)
    : null
}

Heading.defaultProps = {
  type: 'h1',
  font: 'primary',
  primary: true,
  secondary: false,
  dark: false,
  gray: false,
  white: false,
}

Heading.propTypes = {
  type: PropTypes.string,
  font: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  dark: PropTypes.bool,
  gray: PropTypes.bool,
  white: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Heading
