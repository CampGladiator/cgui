import React from 'react'
import PropTypes from 'prop-types'
import './Logo.scss'
import mods from '../../../utilities/mods'

const Logo = ({
  children,
  width,
  icon,
  full,
  primary,
  secondary,
  black,
  white,
  light,
  gray,
  mono,
  className,
  style,
  ...props
}) => {
  const minWidth = full ? '120px' : '20px'

  return (
    <div
      className={`cg-logo`}
      style={{ width: width, minWidth: minWidth, ...style }}
      {...props}
    >
      <span className={mods('cg-logo__img', { icon, full }, className)}>
        {children}
      </span>
    </div>
  )
}

const Icon = ({
  className,
  primary,
  secondary,
  black,
  white,
  light,
  gray,
  width,
  style,
  ...props
}) => (
  <Logo
    primary={primary}
    secondary={secondary}
    black={black}
    white={white}
    light={light}
    gray={gray}
    width={width}
    style={style}
    className={mods(
      'cg-logo__img__icon',
      {
        primary,
        secondary,
        black,
        white,
        light,
        gray,
      },
      className,
    )}
    {...props}
  >
    CG
  </Logo>
)

const Full = ({
  className,
  primary,
  secondary,
  black,
  white,
  mono,
  width,
  style,
  ...props
}) => (
  <Logo
    primary={primary}
    secondary={secondary}
    black={black}
    white={white}
    mono={mono}
    width={width}
    style={style}
    className={mods(
      'cg-logo__img__full',
      {
        primary,
        secondary,
        black,
        white,
        mono,
      },
      className,
    )}
    {...props}
  >
    Camp Gladiator
  </Logo>
)

Logo.defaultProps = {
  width: '',
  icon: false,
  full: false,
  primary: false,
  secondary: false,
  black: false,
  white: false,
  light: false,
  gray: false,
  mono: false,
  className: '',
  style: '',
}

Icon.defaultProps = {
  width: '60px',
  icon: true,
  primary: false,
  secondary: false,
  black: false,
  white: false,
  light: false,
  gray: false,
  className: '',
  style: '',
}

Full.defaultProps = {
  width: '200px',
  full: true,
  primary: false,
  secondary: false,
  black: false,
  white: false,
  mono: false,
  className: '',
  style: '',
}

Full.propTypes = {
  width: PropTypes.string,
  full: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  black: PropTypes.bool,
  white: PropTypes.bool,
  mono: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

Icon.propTypes = {
  width: PropTypes.string,
  icon: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  black: PropTypes.bool,
  white: PropTypes.bool,
  light: PropTypes.bool,
  gray: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

Logo.propTypes = {
  width: PropTypes.string,
  icon: PropTypes.bool,
  full: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  black: PropTypes.bool,
  white: PropTypes.bool,
  light: PropTypes.bool,
  gray: PropTypes.bool,
  mono: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node,
}

export default Object.assign(Logo, { Icon, Full })
