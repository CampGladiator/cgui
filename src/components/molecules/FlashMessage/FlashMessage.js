import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './FlashMessage.scss'
import Icon from '../../atoms/Icon'
import mods from '../../../utilities/mods'

const FlashBadge = memo(props => (
  <span className="cg-flash-message__badge" {...props} />
))
const FlashContent = memo(props => (
  <section className="cg-flash-message__content" {...props} />
))
const FlashMessage = memo(
  ({
    className,
    children,
    count = 0,
    text = '',
    onFlashClose,
    show = true,
    ...props
  }) => {
    const flashCloseHandler = e => {
      e.preventDefault()
      if (onFlashClose) {
        onFlashClose(e)
      }
    }
    if (show) {
      return (
        <div className={mods('cg-flash-message', {}, className)} {...props}>
          <FlashBadge>{count}</FlashBadge>
          <FlashContent>
            <span>{text}</span>
            {children}
          </FlashContent>
          <Icon name="close" onClick={flashCloseHandler} />
        </div>
      )
    }
    return null
  },
)

FlashMessage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  count: PropTypes.number,
  text: PropTypes.string,
  onFlashClose: PropTypes.func,
  show: PropTypes.bool,
}

export default FlashMessage
