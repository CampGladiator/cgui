import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Checkbox.js'
import './Checkbox.scss'

const Checkbox = ({
  className,
  id,
  name = '',
  checked = false,
  onClick = () => {},
  children,
  ...props
}) => {
  const [check, setCheck] = useState(checked)

  useEffect(() => {
    onClick(check)
  }, [check, onClick])

  return (
    <div className={`cg-checkbox ${className}`} {...props}>
      <input
        id={id}
        name={name}
        defaultChecked={check}
        className="cg-checkbox__input"
        type="checkbox"
        onClick={() => setCheck(!check)}
        value={check}
      />
      <label htmlFor={id} className="cg-checkbox__label">
        {children}
      </label>
      <i className="cg-checkbox__tick" />
    </div>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default Checkbox
