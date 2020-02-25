import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Fieldset from '../../atoms/Fieldset'
import './RadioGroup.scss'

const Radio = ({ label, value, checked = false, onClick }) => (
  <label className={`cg-radio-list__item`} htmlFor={value}>
    <input
      className="cg-radio-list__input"
      id={value}
      checked={checked}
      onChange={onClick}
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

const RadioGroup = ({ options, onClick }) => {
  const [selected, setSelected] = useState('')

  return (
    <Fieldset className="cg-radio-list">
      {options.map(option => (
        <Radio
          key={option.value}
          value={option.value}
          onClick={e => setSelected(e.target.value)}
          checked={selected === option.value}
          label={option.label}
          onChange={onClick}
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
  onChange: PropTypes.func,
}

export default RadioGroup
