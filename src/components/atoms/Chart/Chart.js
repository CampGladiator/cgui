import React from 'react'
import PropTypes from 'prop-types'
import mods from '../../../utilities/mods'
import './Chart.scss'

const Chart = ({ small, normal, large, children, ...props }) => (
  <div className={mods('cg-counter', { small, normal, large })} {...props}>{children}</div>
)

Chart.propTypes = {
  small: PropTypes.bool,
  normal: PropTypes.bool,
  large: PropTypes.bool,
}

export default Chart
