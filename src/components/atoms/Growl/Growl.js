import React from 'react'
import PropTypes from 'prop-types'
import mods from '../../../utilities/mods'
import Icon from '../Icon'
import './Growl.scss'

const Growl = ({ className, id, isError, children, onClick }) => (
  <div
    id={id}
    className={mods(
      'cg-growl-msg',
      {},
      isError && 'cg-growl-msg--error',
      className,
    )}
  >
    <div className="cg-growl-msg__text">{children}</div>
    <button className="cg-growl-msg__close-btn" onClick={onClick}>
      <Icon className="cg-growl-msg__close-btn" name="close" />
    </button>
  </div>
)

Growl.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  isError: PropTypes.bool,
  children: PropTypes.node,
}

export default Growl
