import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Fieldset from '../../atoms/Fieldset'
import SetSelector from '../../atoms/SetSelector'
import './SetSelectorGroup.scss'

const SetSelectorGroup = ({
  defaultSelected,
  onChange,
  options,
  className = '',
  type,
}) => {
  const [selectedList, setSelectedList] = useState(defaultSelected)
  const [selectorOptions, setSelectorOptions] = useState(options)

  useEffect(() => {
    setSelectorOptions(options)
  }, [options])

  useEffect(() => {
    onChange(selectedList)
  }, [selectedList, setSelectedList, onChange])
  const updateList = targetVal => {
    switch (type) {
      case 'radio':
        setSelectedList([targetVal])
        return

      case 'checkbox':
        setSelectedList(
          selectedList.includes(targetVal)
            ? selectedList.filter(item => item !== targetVal)
            : [...selectedList, targetVal],
        )
        return

      default:
        setSelectedList([])
        return
    }
  }
  return (
    <Fieldset className={`cg-set-selector ${className}`}>
      {selectorOptions.map(option => (
        <span key={option.value}>
          <SetSelector
            key={option.value}
            value={option.value}
            onSelect={e => {
              updateList(e.target.value)
            }}
            selected={selectedList.includes(option.value)}
            label={option.label}
            type={type}
          >
            {option.label}
          </SetSelector>
        </span>
      ))}
    </Fieldset>
  )
}

const Option = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
})

SetSelectorGroup.propTypes = {
  options: PropTypes.arrayOf(Option),
  className: PropTypes.string,
  type: PropTypes.string,
  defaultSelected: PropTypes.array,
  onChange: PropTypes.func,
}

export default SetSelectorGroup
