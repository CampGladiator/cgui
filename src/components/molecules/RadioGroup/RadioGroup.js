import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Fieldset from '../../atoms/Fieldset'
import './RadioGroup.scss'

const Radio = ({ label, value, checked = false, onChange }) => (
  <label className={`cg-radio-list__item`} htmlFor={value}>
    <input
      className="cg-radio-list__input"
      id={value}
      checked={checked}
      onChange={onChange}
      type="radio"
      value={value}
    />
    {label}
  </label>
)

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
}

const RadioGroup = ({ options, onChange, className = '' }) => {
  const [selected, setSelected] = useState('')

  return (
    <Fieldset className={`cg-radio-list ${className}`}>
      {options.map(option => (
        <Radio
          key={option.value}
          value={option.value}
          onChange={e => {
            setSelected(e.target.value)
            onChange(e.target.value)
          }}
          checked={selected === option.value}
          label={option.label}
        ></Radio>
      ))}
    </Fieldset>
  )
}

const Option = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
})

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(Option),
  className: PropTypes.string,
  onChange: PropTypes.func,
}

export default RadioGroup
