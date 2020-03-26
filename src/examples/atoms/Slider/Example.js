import React, { useState, Fragment } from 'react'
import Card from '../../../components/atoms/Card'
import Slider from '../../../components/atoms/Slider'

const SimpleSlider = () => {
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Simple Slider </h3>
      <Slider value={20} />
    </Card>
  )
}

const SimpleSliderWithOnChange = () => {
  const [value, setValue] = useState(20)
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Simple Slider With OnChange </h3>
      <Slider value={value} onChange={e => setValue(e.value)} />
    </Card>
  )
}

const SimpleSliderWithMinMax = () => {
  const [value, setValue] = useState(3)
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Simple Slider With Min Max </h3>
      <Slider
        value={value}
        onChange={e => setValue(e.value)}
        min={1}
        max={30}
      />
    </Card>
  )
}

const SimpleSliderWithDisable = () => {
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Simple Slider Disabled </h3>
      <Slider value={20} disabled />
    </Card>
  )
}

const SimpleSliderWithStep = () => {
  const [value, setValue] = useState(10)
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Simple Slider With Step </h3>
      <Slider value={value} onChange={e => setValue(e.value)} step={10} />
    </Card>
  )
}

const SimpleSliderWithNoValueShown = () => {
  const [value, setValue] = useState(10)
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Simple Slider With No Value Visible </h3>
      <Slider
        value={value}
        onChange={e => setValue(e.value)}
        showValue={false}
      />
    </Card>
  )
}

const RangeSlider = () => {
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Range Slider </h3>
      <Slider value={[5, 55]} range />
    </Card>
  )
}

const RangeSliderWithOnChange = () => {
  const [values, setValues] = useState([25, 75])
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Range Slider With OnChange </h3>
      <Slider value={values} onChange={e => setValues(e.value)} range />
    </Card>
  )
}

const RangeSliderWithMinMax = () => {
  const [values, setValues] = useState([20, 80])
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Range Slider With Min Max </h3>
      <Slider
        value={values}
        onChange={e => setValues(e.value)}
        range
        min={10}
        max={90}
      />
    </Card>
  )
}

const RangeSliderWithDisable = () => {
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Range Slider Disabled </h3>
      <Slider value={[30, 80]} range disabled />
    </Card>
  )
}

const RangeSliderWithStep = () => {
  const [values, setValues] = useState([30, 60])
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Range Slider With Step </h3>
      <Slider
        value={values}
        onChange={e => setValues(e.value)}
        range
        step={5}
      />
    </Card>
  )
}

const RangeSliderWithNoValueShown = () => {
  const [values, setValues] = useState([15, 60])
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Range Slider With No Value Visible </h3>
      <Slider
        value={values}
        onChange={e => setValues(e.value)}
        range
        showValue={false}
      />
    </Card>
  )
}

const RangeSliderWithRangeDiff = () => {
  const [values, setValues] = useState([10, 90])
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Range Slider With Some Range Difference </h3>
      <Slider
        value={values}
        onChange={e => setValues(e.value)}
        range
        rangeDiff={10}
      />
    </Card>
  )
}

const RangeSliderWithTime = () => {
  const [values, setValues] = useState([0, 23])
  return (
    <Card style={{ padding: '40px' }}>
      <h3> Range Slider With Time Format </h3>
      <Slider
        value={values}
        onChange={e => setValues(e.value)}
        range
        min={0}
        max={23}
        rangeDiff={1}
        showTimeFormat
      />
    </Card>
  )
}

const RangeSliderWithTimeAndSelected = () => {
  const [values, setValues] = useState([3, 17])
  return (
    <Card style={{ padding: '40px' }}>
      <h3> Range Slider With Time Format and Default Time </h3>
      <Slider
        value={values}
        onChange={e => setValues(e.value)}
        range
        min={0}
        max={23}
        rangeDiff={1}
        showTimeFormat
      />
    </Card>
  )
}

export default () => (
  <Fragment>
    <SimpleSlider />
    <SimpleSliderWithOnChange />
    <SimpleSliderWithMinMax />
    <SimpleSliderWithDisable />
    <SimpleSliderWithStep />
    <SimpleSliderWithNoValueShown />
    <RangeSlider />
    <RangeSliderWithOnChange />
    <RangeSliderWithMinMax />
    <RangeSliderWithDisable />
    <RangeSliderWithStep />
    <RangeSliderWithNoValueShown />
    <RangeSliderWithRangeDiff />
    <RangeSliderWithTime />
    <RangeSliderWithTimeAndSelected />
  </Fragment>
)
