import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Radio.scss'

const Radio = ({
  className,
  selected = false,
  id,
  onClick = () => {},
  children,
  value,
  ...props
}) => {
  const [select, setSelect] = useState(selected)

  const handleOnClick = event => {
    setSelect(!select)
    onClick(event.target.value)
  }

  return (
    <label className={`cg-radio-list__item ${className}`} htmlFor={id}>
      <input
        className="cg-radio-list__input"
        id={id}
        key={id}
        defaultChecked={selected}
        onChange={handleOnClick}
        type="radio"
        value={value}
        {...props}
      />
      {children}
    </label>
  )
}

Radio.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Radio
