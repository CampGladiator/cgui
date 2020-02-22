import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../../atoms/Button'
import './ButtonGroup.scss'

const btnIDs = ['left', 'right']

const ButtonGroup = ({
  primary,
  secondary,
  solid,
  outline,
  dark,
  gray,
  size,
  disabled,
  content = { left: '', right: '' },
  className = '',
  defaultSelected = '',
  handleOnLeftClick = () => {},
  handleOnRightClick = () => {},
  ...props
}) => {
  const [activeBtn, setActiveBtn] = useState('')

  const getDefaultSelectedId = defaultSelected =>
    defaultSelected === btnIDs[0] || defaultSelected === btnIDs[1]
      ? defaultSelected
      : null

  const isActiveBtn = (element, defaultSelected) =>
    (getDefaultSelectedId(defaultSelected) === element && activeBtn === '') ||
    activeBtn === element

  const setClickHandler = id =>
    id === btnIDs[0] ? handleOnLeftClick() : handleOnRightClick()

  const handleOnClick = (element, id) => {
    setActiveBtn(element.target.dataset.id)
    return setClickHandler(id)
  }

  return (
    <div className={`cg-button-group ${className}`} {...props}>
      {btnIDs.map(id => (
        <Button
          className={`cg-button-group__${id}`}
          key={id}
          data-id={id}
          size={size}
          disabled={disabled}
          primary={primary}
          secondary={secondary}
          solid={isActiveBtn(id, defaultSelected)}
          outline={!isActiveBtn(id, defaultSelected)}
          dark={dark}
          gray={gray}
          onClick={element => {
            handleOnClick(element, id)
          }}
        >
          {content[id]}
        </Button>
      ))}
    </div>
  )
}

const Size = PropTypes.oneOf(['xsmall', 'small', 'large', 'xlarge'])
const Selected = PropTypes.oneOf(btnIDs)

const Labels = PropTypes.shape({
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
})

ButtonGroup.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  solid: PropTypes.bool,
  outline: PropTypes.bool,
  dark: PropTypes.bool,
  gray: PropTypes.bool,
  size: Size,
  disabled: PropTypes.bool,
  content: Labels,
  className: PropTypes.string,
  defaultSelected: Selected,
  handleOnLeftClick: PropTypes.func,
  handleOnRightClick: PropTypes.func,
}

export default ButtonGroup
