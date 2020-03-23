import React from 'react'
import PropTypes from 'prop-types'
import './Callout.scss'

const Callout = ({ className, style, content }) => (
  <article className={`cg-callout ${className}`} style={{ ...style }}>
    <div>{content}</div>
  </article>
)

Callout.defaultProps = {
  className: '',
  style: {},
  content: '',
}

Callout.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  content: PropTypes.string,
}

export default Callout
