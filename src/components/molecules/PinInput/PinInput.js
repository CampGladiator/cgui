import React, { Component } from 'react'
import PropTypes from 'prop-types'
import mods from '../../../utilities/mods'
import Icon from '../../atoms/Icon'
import Button from '../../atoms/Button'
import './PinInput.scss'

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
      pinValue: {
        ...this.convertNoOfInputToStateObj(),
      },
      hideInputValue: true,
    }
    this.pinInputRef = null
    this.setInputPartRefCallback = this.setInputPartRefCallback.bind(this)
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this)
    this.viewInputData = this.viewInputData.bind(this)
  }

  convertNoOfInputToStateObj() {
    const { noOfInput, value } = this.props
    const updatedValue = value || ''
    return Array.from(Array(noOfInput), (_, index) => index + 1).reduce(
      (stateObj, item, indexValue) => {
        return {
          ...stateObj,
          [`pin${item}`]: updatedValue.charAt(indexValue) || '',
        }
      },
      {},
    )
  }

  setInputPartRefCallback(ele, index) {
    if (ele) {
      this.pinInputRef[index] = ele
    }
  }

  getFullPinValues() {
    const { pinValue } = this.state
    let fullPinValues = ''
    Object.keys(pinValue).map((item) => {
      fullPinValues += pinValue[item]
      return item
    })
    return fullPinValues
  }

  handleChange(e) {
    const { id, value } = e.target
    const { pinValue } = this.state
    this.setState(
      { pinValue: { ...pinValue, [id]: value.substr(0, 1) } },
      () => {
        const { onPinChanged, noOfInput } = this.props
        if (onPinChanged) {
          const fullPinValues = this.getFullPinValues()
          const userPin =
            fullPinValues.length === noOfInput ? fullPinValues : ''
          onPinChanged({
            userPin,
          })
        }
      },
    )
  }

  focusOnPinPart(indexPos) {
    const element = this.pinInputRef[indexPos] || null
    if (element) {
      element.focus()
    }
  }

  onInputChangeHandler(e, index) {
    const { value } = e.target
    const step = value ? 1 : -1
    const isValid = value === '' || !isNaN(parseInt(value, 10))
    if (isValid) {
      this.handleChange(e)
      this.focusOnPinPart(index + step)
    }
  }

  viewInputData(e) {
    e.preventDefault()
    this.setState((state) => ({ hideInputValue: !state.hideInputValue }))
  }

  getPinInputPart() {
    const { pinValue, hideInputValue } = this.state
    const pinValueKeys = Object.keys(pinValue) || []
    const numberOfPins = pinValueKeys.length || 0
    if (numberOfPins > 1) {
      this.pinInputRef = new Array(numberOfPins)
      return pinValueKeys.map((item, index) => {
        const value = pinValue[item] || ''
        const name = `pin${index + 1}`
        const inputPartRefCallback = (ele) =>
          this.setInputPartRefCallback(ele, index)
        const onInputChangeHandler = (event) =>
          this.onInputChangeHandler(event, index)
        return (
          <div
            key={`cg-pin-input-part~${index}`}
            className={mods('cg-pin-input-part', {
              filled: (value && hideInputValue) || false,
            })}
          >
            <input
              ref={inputPartRefCallback}
              className="cg-pin-input__char"
              placeholder="-"
              type="tel"
              id={name}
              autoComplete="off"
              value={value}
              pattern="[0-9]*"
              required
              name={name}
              inputMode="numeric"
              onChange={onInputChangeHandler}
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
          <Icon name="view" />
        </Button>
      </div>
    )
  }
}

export default PinInput
