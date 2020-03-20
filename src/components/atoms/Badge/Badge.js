import React from 'react'
import PropTypes from 'prop-types'
import './Badge.scss'
import mods from '../../../utilities/mods'

const Badge = ({
  className,
  plain,
  bold,
  bronze,
  silver,
  gold,
  elite,
  type,
  ...props
}) => (
  <div
    className={mods(
      'cg-' + type,
      { plain, bold, bronze, silver, gold, elite },
      className,
    )}
    {...props}
  />
)
const Type = PropTypes.oneOf(['badge', 'plate', 'badge-with-plate'])

Badge.defaultProps = {
  plain: true,
  bold: false,
  bronze: false,
  silver: false,
  gold: false,
  elite: false,
  type: 'badge',
}

Badge.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  bold: PropTypes.bool,
  bronze: PropTypes.bool,
  silver: PropTypes.bool,
  gold: PropTypes.bool,
  elite: PropTypes.bool,
  type: Type,
}

export default Badge
