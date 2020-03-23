import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './CreditCard.scss'
import mods from '../../../utilities/mods'

const CreditCard = memo(
  ({
    className,
    placeholder,
    amex,
    diners,
    discover,
    jcb,
    laser,
    maestro,
    mc,
    visaelec,
    visa,
    ...props
  }) => (
    <div
      className={mods(
        'cg-credit-card',
        {
          placeholder,
          amex,
          diners,
          discover,
          jcb,
          laser,
          maestro,
          mc,
          visaelec,
          visa,
        },
        className,
      )}
      {...props}
    />
  ),
)

CreditCard.defaultProps = {
  placeholder: true,
  amex: false,
  diners: false,
  discover: false,
  jcb: false,
  laser: false,
  maestro: false,
  mc: false,
  visaelec: false,
  visa: false,
}

CreditCard.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.bool,
  amex: PropTypes.bool,
  diners: PropTypes.bool,
  discover: PropTypes.bool,
  jcb: PropTypes.bool,
  laser: PropTypes.bool,
  maestro: PropTypes.bool,
  mc: PropTypes.bool,
  visaelec: PropTypes.bool,
  visa: PropTypes.bool,
}

export default CreditCard
