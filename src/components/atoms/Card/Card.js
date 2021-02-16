import React from 'react'
import PropTypes from 'prop-types'
import mods from '../../../utilities/mods'
import './Card.scss'

const Card = ({ className = '', flat, raised, children, ...props }) => (
  <article className={`${mods('cg-card', { flat, raised })} ${className}`} {...props}>
    {children}
  </article>
)

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  flat: PropTypes.bool,
  raised: PropTypes.bool,
}

export default Card
