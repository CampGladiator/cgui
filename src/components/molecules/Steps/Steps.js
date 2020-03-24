import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './Steps.scss'
import mods from '../../../utilities/mods'

const StepsItem = memo(({ steps = [], currentSelectedStep = 0 }) =>
  steps.map((step, index) => {
    let label = ''
    if (step && typeof step === 'string') {
      label = step
    } else {
      ;({ label = '' } = step || {})
    }
    let additionalClassName = ''
    if (currentSelectedStep === index) {
      additionalClassName = 'cg-step--current'
    } else if (index > currentSelectedStep) {
      additionalClassName = 'cg-step--disabled'
    }
    return (
      <li key={`step~${index}`} className={`cg-step ${additionalClassName}`}>
        <span className="cg-step__bullet">{index + 1}</span>
        <h3 className="cg-step__text">{label}</h3>
      </li>
    )
  }),
)

const Steps = memo(
  ({ className, steps = [], currentSelectedStep = 0, ...props }) => {
    if (steps.length > 0) {
      return (
        <ul className={mods('cg-steps', {}, className)}>
          <StepsItem
            steps={steps}
            currentSelectedStep={currentSelectedStep}
            {...props}
          />
        </ul>
      )
    }
    return null
  },
)

Steps.displayName = 'Steps'

Steps.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.array,
  currentSelectedStep: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

export default Steps
