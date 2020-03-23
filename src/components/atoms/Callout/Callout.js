import React from 'react'
import PropTypes from 'prop-types'
import mods from '../../../utilities/mods'
import './Callout.scss'

const Callout = ({ className, children, ...props }) => (
  <article className={mods('cg-callout', {}, className)} {...props}>
    {children}
  </article>
)

Callout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Callout
