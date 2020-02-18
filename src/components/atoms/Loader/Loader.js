import React from 'react'
import mods from '../../../utilities/mods'
import './Loader.scss'

const Loader = ({
  label = 'loading',
  white,
  gray,
  dark,
  secondary,
  primary,
  disabled,
  className,
  ...props
}) => (
  <figure
    className={mods(
      'cg-loader',
      {
        white,
        gray,
        dark,
        secondary,
        primary,
        disabled,
      },
      className,
    )}
    role="alert"
    aria-live="assertive"
    aria-label={label}
    {...props}
  >
    <div className="cg-loader__dot" key={1} />
    <div className="cg-loader__dot" key={2} />
    <div className="cg-loader__dot" key={3} />
  </figure>
)

export default Loader
