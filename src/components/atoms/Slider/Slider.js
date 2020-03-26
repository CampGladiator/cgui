import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import mods from '../../../utilities/mods'
import './Slider.scss'

class Slider extends Component {
  static defaultProps = {
    value: null,
    min: 0,
    max: 100,
    step: null,
    range: false,
    showValue: true,
    showTimeFormat: false,
    rangeDiff: null,
    disabled: false,
    onChange: null,
    onSliderEnd: null,
  }

  static propTypes = {
    /**
     * @property {any} value used to show the selected value
     */
    value: PropTypes.any,
    /**
     * @property {number} min minimum value for the slider
     */
    min: PropTypes.number,
    /**
     * @property {number} max maximum value for the slider
     */
    max: PropTypes.number,
    /**
     * @property {number} step determines the number of steps
     */
    step: PropTypes.number,
    /**
     * @property {boolean} range used to show the range slider
     */
    range: PropTypes.bool,
    /**
     * @property {boolean} showValue used to show the values below the slider handle
     */
    showValue: PropTypes.bool,
    /**
     * @property {boolean} showTimeFormat used to show the values in time format
     */
    showTimeFormat: PropTypes.bool,
    /**
     * @property {number} rangeDiff determines the gap between both the handler in case of range slider
     */
    rangeDiff: PropTypes.number,
    /**
     * @property {boolean} disabled used to show the disabled slider
     */
    disabled: PropTypes.bool,
    /**
     * @property {function} onChange Callback function which will be called when user slides the handle
     */
    onChange: PropTypes.func,
    /**
     * @property {function} onSliderEnd Callback function will be called when user slides the handle to the slider end
     */
    onSliderEnd: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.onSliderClick = this.onSliderClick.bind(this)
    this.onSliderRefCallback = this.onSliderRefCallback.bind(this)
    this.sliderRef = null
  }

  onSliderRefCallback(element) {
    if (element) {
      this.sliderRef = element
    }
  }

  bindDragListeners() {
    if (!this.dragStartListener) {
      this.dragStartListener = this.onDragStart.bind(this)
      document.addEventListener('mousemove', this.dragStartListener)
    }

    if (!this.dragEndListener) {
      this.dragEndListener = this.onDragEnd.bind(this)
      document.addEventListener('mouseup', this.dragEndListener)
    }
  }

  unbindDragListeners() {
    if (this.dragStartListener) {
      document.removeEventListener('mousemove', this.dragStartListener)
      this.dragStartListener = null
    }

    if (this.dragEndListener) {
      document.removeEventListener('mouseup', this.dragEndListener)
      this.dragEndListener = null
    }
  }

  bindTouchListeners() {
    if (!this.dragStartListener) {
      this.dragStartListener = this.onDragStart.bind(this)
      document.addEventListener('touchmove', this.dragStartListener)
    }

    if (!this.dragEndListener) {
      this.dragEndListener = this.onDragEnd.bind(this)
      document.addEventListener('touchend', this.dragEndListener)
    }
  }

  unbindTouchListeners() {
    if (this.dragStartListener) {
      document.removeEventListener('touchmove', this.dragStartListener)
      this.dragStartListener = null
    }

    if (this.dragEndListener) {
      document.removeEventListener('touchend', this.dragEndListener)
      this.dragEndListener = null
    }
  }

  unbindEventListeners() {
    this.unbindDragListeners()
    this.unbindTouchListeners()
  }

  componentWillUnmount() {
    this.unbindEventListeners()
  }

  setDomData() {
    if (this.sliderRef) {
      const rectBoundary = this.sliderRef.getBoundingClientRect()
      this.sliderWidth = this.sliderRef.offsetWidth
      this.positionX =
        rectBoundary.left +
        (window.pageXOffset || document.documentElement.scrollLeft) -
        (document.documentElement.clientLeft || 0)
    }
  }

  updateValue(event, newValue) {
    const { range, min, max, value, onChange, rangeDiff } = this.props
    let updatedValue = newValue
    let newValues = null
    if (range) {
      if (this.handleIndex === 0) {
        if (updatedValue < min) {
          updatedValue = min
        } else if (rangeDiff && updatedValue > value[1] - rangeDiff) {
          updatedValue = value[1] - rangeDiff
        } else if (updatedValue > value[1]) {
          updatedValue = value[1]
        }
      } else {
        if (updatedValue > max) {
          updatedValue = max
        } else if (rangeDiff && updatedValue < value[0] + rangeDiff) {
          updatedValue = value[0] + rangeDiff
        } else if (updatedValue < value[0]) {
          updatedValue = value[0]
        }
      }
      newValues = [...value]
      newValues[this.handleIndex] = Math.floor(updatedValue)
    } else {
      if (updatedValue < min) {
        updatedValue = min
      } else if (updatedValue > max) {
        updatedValue = max
      }
      newValues = Math.floor(updatedValue)
    }
    if (onChange) {
      onChange({
        event,
        value: newValues,
      })
    }
  }

  setValue(event) {
    const pageX = event.touches ? event.touches[0].pageX : event.pageX
    const currentValue = ((pageX - this.positionX) * 100) / this.sliderWidth
    const { max, min, range, step, value } = this.props
    let newValue = (max - min) * (currentValue / 100) + min
    if (step) {
      const oldValue = range ? value[this.handleIndex] : value
      const diff = newValue - oldValue
      const diffValue = newValue / step - oldValue / step
      if (diff < 0) {
        newValue = oldValue + Math.ceil(diffValue) * step
      } else if (diff > 0) {
        newValue = oldValue + Math.floor(diffValue) * step
      }
    }
    this.updateValue(event, newValue)
  }

  onSliderClick(event) {
    if (!this.props.disabled) {
      if (!this.sliderHandleClick) {
        this.setDomData()
        this.setValue(event)
      }
      this.sliderHandleClick = false
    }
  }

  onDragHandler(event, index) {
    if (!this.props.disabled) {
      this.dragging = true
      this.setDomData()
      this.sliderHandleClick = true
      this.handleIndex = index
      event.preventDefault()
    }
  }

  onMouseDown(event, index) {
    this.bindDragListeners()
    this.onDragHandler(event, index)
  }

  onTouchStart(event, index) {
    this.bindTouchListeners()
    this.onDragHandler(event, index)
  }

  onDragStart(event) {
    if (this.dragging) {
      this.setValue(event)
      event.preventDefault()
    }
  }

  onDragEnd(event) {
    if (this.dragging) {
      this.dragging = false
      const { onSliderEnd, value } = this.props
      if (onSliderEnd) {
        onSliderEnd({
          event,
          value,
        })
      }
      this.unbindEventListeners()
    }
  }

  convertTime(time = '') {
    let updatedTime = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time]
    if (updatedTime.length > 1) {
      updatedTime = updatedTime.slice(1)
      updatedTime[5] = +updatedTime[0] < 12 ? 'AM' : 'PM'
      updatedTime[0] = +updatedTime[0] % 12 || 12
    }
    return updatedTime.join('')
  }

  getSliderLabel(leftValue, textValue = '') {
    return (
      <div
        className="cg-slider__label"
        style={{ left: `calc(${leftValue}% - 20px)` }}
      >
        {textValue}
      </div>
    )
  }

  getSliderHandle(leftValue, index = null) {
    return (
      <span
        onMouseDown={event => this.onMouseDown(event, index)}
        onTouchStart={event => this.onTouchStart(event, index)}
        tabIndex="0"
        className="cg-slider__handle"
        style={{
          transition: this.dragging ? 'none' : null,
          left: `${leftValue}%`,
        }}
      />
    )
  }

  getRangeSlider() {
    const {
      value,
      min,
      max,
      showValue = false,
      showTimeFormat = false,
    } = this.props
    const values = value || [0, 0]
    const handleValueStart =
      ((values[0] < min ? 0 : values[0] - min) * 100) / (max - min)
    const handleValueEnd =
      ((values[1] > max ? 100 : values[1] - min) * 100) / (max - min)
    let startValue = values[0]
    let endValue = values[1]
    if (showTimeFormat) {
      startValue = this.convertTime(`${('0' + startValue).slice(-2)}:00`)
      endValue = this.convertTime(`${('0' + endValue).slice(-2)}:00`)
    }
    return (
      <Fragment>
        <span
          className="cg-slider__range"
          style={{
            left: `${handleValueStart}%`,
            width: `${handleValueEnd - handleValueStart}%`,
          }}
        ></span>
        {this.getSliderHandle(handleValueStart, 0)}
        {showValue && this.getSliderLabel(handleValueStart, startValue)}
        {this.getSliderHandle(handleValueEnd, 1)}
        {showValue && this.getSliderLabel(handleValueEnd, endValue)}
      </Fragment>
    )
  }

  getSlider() {
    const { value = 0, min, max, showValue = false } = this.props
    let handleValue
    if (value < min) {
      handleValue = 0
    } else if (value > max) {
      handleValue = 100
    } else {
      handleValue = ((value - min) * 100) / (max - min)
    }
    return (
      <Fragment>
        <span
          className="cg-slider__range"
          style={{
            width: `${handleValue}%`,
          }}
        ></span>
        {this.getSliderHandle(handleValue)}
        {showValue && this.getSliderLabel(handleValue, value)}
      </Fragment>
    )
  }

  render() {
    const { id, style, className, range, disabled } = this.props
    const slideComponent = range ? this.getRangeSlider() : this.getSlider()
    return (
      <div
        id={id}
        style={style}
        ref={this.onSliderRefCallback}
        className={mods('cg-slider', { disabled }, className)}
        onClick={this.onSliderClick}
      >
        {slideComponent}
      </div>
    )
  }
}

export default Slider
