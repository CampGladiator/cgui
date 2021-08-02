import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../../atoms/Button'
import './ButtonGroup.scss'

function colorToButtonProp(color) {
  switch (color) {
    case 'primary':
      return { primary: true }

    case 'secondary':
      return { secondary: true }

    case 'dark':
      return { dark: true }

    case 'gray':
      return { gray: true }

    case 'white':
      return { white: true }
  }

  return {}
}

function ButtonGroup({
  className = '',
  color = 'default',
  size,
  disabled,
  defaultSelected = 0,
  onSelect = () => {},
  buttons = [],
  ...props
}) {
  const buttonsProps = buttons.map((props) => ({
    ...props,
    ...colorToButtonProp(color),
    size,
    disabled,
  }))
  const [active, setActive] = useState(defaultSelected)
  const isSelected = (index) => index === active
  const onClick = (index) => (event) => {
    setActive(index)
    onSelect(event, index)
  }

  return (
    <div className={`cg-button-group ${className}`} {...props}>
      {buttonsProps.map((buttonProps, index) => {
        const isActive = isSelected(index)

        return (
          <Button
            {...buttonProps}
            className="cg-button-group__button"
            key={`button-group-button-${index}`}
            solid={isActive}
            outline={!isActive}
            onClick={onClick(index)}
          />
        )
      })}
    </div>
  )
}

const Size = PropTypes.oneOf(['xsmall', 'small', 'large', 'xlarge'])

ButtonGroup.propTypes = {
  color: PropTypes.string,
  size: Size,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  defaultSelected: PropTypes.number,
  onSelect: PropTypes.func,
  buttons: PropTypes.arrayOf(PropTypes.shape(Button.propTypes)),
}

export default ButtonGroup
