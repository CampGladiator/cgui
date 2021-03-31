import React, { Component } from 'react'
import PropTypes from 'prop-types'
import mods from '../../../utilities/mods'
import Button from '../../atoms/Button'
import './PinInput.scss'
import keyCodes from '../../../utilities/keycodes'
import { CDN_URL } from '../../../utilities/path'
class PinInput extends Component {
  static defaultProps = {
    noOfInput: 4,
    value: '',
    inputRef: null,
  }

  static propTypes = {
    /**
     * @property {number} noOfInput Used to define the number of input which user needs to fill.
     */
    noOfInput: PropTypes.number,
    /**
     * @property {string} value Used to give the value to the input.
     */
    value: PropTypes.string,
    /**
     * @property {function} onPinChanged Handler used to get the Callback when input is filled
     */
    onPinChanged: PropTypes.func,
    /**
     * @property {Object} inputRef Used to select the pin input
     */
    inputRef: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.state = {
      pinValue: this.convertNoOfInputToStateObj(),
      hideInputValue: true,
    }
    this.pinInputRef = []
  }

  setRef = (ref) => {
    this.pinInputRef.push(ref)
  }

  convertNoOfInputToStateObj() {
    const { noOfInput, value } = this.props
    const updatedValue = value || ''
    const stateObj = {}
    for (let i = 0; i < noOfInput; i++) {
      stateObj[`pin${i + 1}`] = updatedValue[i] || ''
    }
    return stateObj
  }

  getFullPinValues() {
    const { pinValue } = this.state
    return Object.values(pinValue).join('')
  }

  handleChange(e) {
    const { id, value } = e.target
    const { pinValue } = this.state
    pinValue[id] = value.substr(0, 1)
    this.setState({ pinValue }, () => {
      const { onPinChanged, noOfInput } = this.props
      if (onPinChanged) {
        const fullPinValues = this.getFullPinValues()
        const userPin = fullPinValues.length === noOfInput ? fullPinValues : ''
        onPinChanged({
          userPin,
        })
      }
    })
  }

  focusOnPinPart(indexPos) {
    const element = this.pinInputRef[indexPos] || null
    if (element) {
      element.focus()
    }
  }

  onInputChangeHandler(index, e) {
    const { value } = e.target
    const step = value ? 1 : -1
    const isValid = value === '' || !isNaN(parseInt(value, 10))
    if (isValid) {
      this.handleChange(e)
      this.focusOnPinPart(index + step)
    }
  }

  viewInputData = (e) => {
    e.preventDefault()
    this.setState((state) => ({ hideInputValue: !state.hideInputValue }))
  }

  onInputKeyDown = (index, e) => {
    if (e.key === keyCodes.BACKSPACE) {
      this.focusOnPinPart(index - 1)
      e.target.value = ''
      this.handleChange(e)
      e.preventDefault()
    }
  }

  getPinInputPart() {
    const { pinValue, hideInputValue } = this.state
    const pinValueKeys = Object.keys(pinValue) || []
    const numberOfPins = pinValueKeys.length || 0
    if (numberOfPins > 1) {
      return pinValueKeys.map((key, index) => {
        const value = pinValue[key] || ''
        const name = `pin${index + 1}`
        return (
          <div
            key={`cg-pin-input-part~${name}`}
            className={mods('cg-pin-input-part', {
              filled: (value && hideInputValue) || false,
            })}
          >
            <input
              ref={this.setRef}
              className="cg-pin-input__char"
              placeholder="-"
              type="tel"
              id={name}
              autoComplete="off"
              value={value}
              pattern="^[0–9]$"
              required
              name={name}
              inputMode="numeric"
              onKeyDown={this.onInputKeyDown.bind(this, index)}
              onChange={this.onInputChangeHandler.bind(this, index)}
            />
          </div>
        )
      })
    }
    return null
  }

  render() {
    const { id, style, className, inputRef } = this.props
    const { hideInputValue } = this.state
    return (
      <div
        id={id}
        style={style}
        className={mods('cg-pin-input', {}, className)}
        ref={inputRef}
      >
        {this.getPinInputPart()}
        <Button
          className={mods('cg-pin-input__toggle-visibility', {
            active: !hideInputValue,
          })}
          type="button"
          onClick={this.viewInputData}
        >
          <img
            src={`${CDN_URL}eye.svg`}
            alt=""
            className="cg-pin-input__toggle-visibility-icon"
          />
        </Button>
      </div>
    )
  }
}

export default PinInput
