import React, { memo } from 'react'
import PropTypes from 'prop-types'
import mods from '../../../utilities/mods'
import './ProgressBar.scss'

const ProgressBar = memo(
  ({ percentCompleted, progressColor = '#c8102e', className, ...props }) => (
    <div className={mods('cg-progress-bar', {}, className)} {...props}>
      <div
        className="cg-progress-bar__content"
        style={{
          transform: `translate(calc(-100% + ${percentCompleted}%))`,
          background: `${progressColor}`,
        }}
      />
    </div>
  ),
)

ProgressBar.displayName = 'ProgressBar'

ProgressBar.propTypes = {
  percentCompleted: PropTypes.number,
  className: PropTypes.string,
  progressColor: PropTypes.string,
}

export default ProgressBar
