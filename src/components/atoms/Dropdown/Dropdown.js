import React from 'react'
import PropTypes from 'prop-types'
import './Dropdown.scss'
import Fieldset from '../Fieldset'

const Dropdown = ({
  label = '',
  inline = false,
  options = [],
  default_ = { label: 'SELECT', value: '' },
  ...props
}) => (
  <Fieldset inline={inline} label={label}>
    <select
      className="cg-input cg-input--rounded cg-input--dropdown"
      {...props}
    >
      {[default_, ...options].map(
        opt =>
          opt && (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ),
      )}
    </select>
  </Fieldset>
)

const Option = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
})

Dropdown.propTypes = {
  options: PropTypes.arrayOf(Option),
  default_: Option,
}

export default Dropdown
