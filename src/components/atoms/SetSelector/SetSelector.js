import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './SetSelector.scss'
import mods from '../../../utilities/mods'

const SetSelector = ({ selected, className, children, ...props }) => {
  const [select, setSelect] = useState(selected)

  return (
    <button
      className={mods(
        'cg-set-selector__item',
        {},
        select && 'cg-set-selector__item--selected',
        className,
      )}
      {...props}
      onClick={() => setSelect(!select)}
    >
      {children}
    </button>
  )
}

SetSelector.defaultProps = {
  className: '',
  selected: false,
}

SetSelector.propTypes = {
  selected: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.string,
}

export default SetSelector
