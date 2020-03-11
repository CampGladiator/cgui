import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Switch.scss'

const Switch = ({
  className = '',
  defaultOn = false,
  onChange = () => {},
  children,
  ...props
}) => {
  const [active, setActive] = useState(defaultOn)

  useEffect(() => {
    onChange(active)
  }, [active, onChange])

  return (
    <div className={`cg-switch ${className}`} {...props}>
      <span
        className={`cg-switch cg-switch__toggle ${
          active ? 'cg-switch__toggle--on' : ''
        }`}
        onClick={() => setActive(!active)}
        role="button"
        aria-pressed="true"
      />
      {children && (
        <span className="cg-switch cg-switch__label">{children}</span>
      )}
    </div>
  )
}

Switch.propTypes = {
  className: PropTypes.string,
  defaultOn: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node,
}

export default Switch
