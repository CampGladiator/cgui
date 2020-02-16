import React from 'react'
import PropTypes from 'prop-types'
import './Fieldset.scss'

const Fieldset = ({ inline = false, label, children, ...props }) => {
  const classes = inline ? 'cg-fieldset cg-fieldset--inline' : 'cg-fieldset'

  const renderInnerHtml = (label, children) =>
    label ? (
      <>
        <label className="cg-label">{label}</label>
        {children}
      </>
    ) : (
      children
    )

  return (
    <div className={classes} {...props}>
      {renderInnerHtml(label, children)}
    </div>
  )
}

Fieldset.propTypes = {
  label: PropTypes.string,
  inline: PropTypes.bool,
  children: PropTypes.node,
}

export default Fieldset
