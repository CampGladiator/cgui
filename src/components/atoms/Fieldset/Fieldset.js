import React from 'react'
import PropTypes from 'prop-types'
import mods from '../../../utilities/mods'
import './Fieldset.scss'

const Fieldset = ({ inline = false, children, className, ...props }) => (
  <div className={mods('cg-fieldset', { inline }, className)} {...props}>
    {children}
  </div>
)

Fieldset.propTypes = {
  inline: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Fieldset
