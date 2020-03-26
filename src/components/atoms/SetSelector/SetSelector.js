import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './SetSelector.scss'
import mods from '../../../utilities/mods'

const SetSelector = ({
  selected,
  className,
  children,
  type,
  onSelect,
  ...props
}) => {
  const [select, setSelect] = useState(selected)

  useEffect(() => {
    setSelect(selected)
  }, [selected])

  const handleOnClick = e => {
    if (type !== undefined) {
      onSelect(e)
    } else {
      setSelect(!select)
    }
  }
  return (
    <button
      className={mods(
        'cg-set-selector__item',
        {},
        select && 'cg-set-selector__item--selected',
        className,
      )}
      {...props}
      onClick={e => {
        handleOnClick(e)
      }}
    >
      {children}
    </button>
  )
}

SetSelector.defaultProps = {
  selected: false,
}

SetSelector.propTypes = {
  selected: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  onSelect: PropTypes.func,
}

export default SetSelector
