import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Checkbox.js'
import './Checkbox.scss'

const Checkbox = ({ id = '', checked = false, children, ...props }) => {
  const [isChecked, setIsChecked] = useState(checked)

  return (
    <div className="cg-checkbox" {...props}>
      <input
        id={id}
        defaultChecked={isChecked}
        className="cg-checkbox__input"
        type="checkbox"
        onClick={() => setIsChecked(!isChecked)}
      />
      <label htmlFor={id} className="cg-checkbox__label">
        {children}
      </label>
      <i className="cg-checkbox__tick" />
    </div>
  )
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  children: PropTypes.node,
}

export default Checkbox
