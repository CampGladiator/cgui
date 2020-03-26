import React, { Fragment } from 'react'
import SetSelectorGroup from '../../../components/molecules/SetSelectorGroup'
import Card from '../../../components/atoms/Card'
const selectorRadioOptions = [
  {
    label: 'xs',
    value: 'xs',
  },
  {
    label: 'x',
    value: 'x',
  },
  {
    label: 'm',
    value: 'm',
  },
]

const selectorCheckboxOptions = [
  {
    label: 'M',
    value: 'm',
  },
  {
    label: 'T',
    value: 't',
  },
  {
    label: 'W',
    value: 'w',
  },
  {
    label: 'Th',
    value: 'th',
  },
  {
    label: 'F',
    value: 'f',
  },
  {
    label: 'S',
    value: 's',
  },
]

const defaultRadioVal = ['x']
const defaultCheckboxVal = ['m', 'w']

const handleOnSetSelectorChange = selected =>
  console.log('handleOnSetSelectorChange:', selected)

const SetSelectorGroupExample = () => {
  return (
    <Card style={{ padding: '20px' }}>
      <h3 style={{ padding: '20px' }}>SetSelector of type Radio</h3>
      <SetSelectorGroup
        options={selectorRadioOptions}
        type="radio"
        defaultSelected={defaultRadioVal}
        onChange={handleOnSetSelectorChange}
      />

      <h3 style={{ padding: '20px' }}>SetSelector of type Checkbox</h3>
      <SetSelectorGroup
        options={selectorCheckboxOptions}
        type="checkbox"
        defaultSelected={defaultCheckboxVal}
        onChange={handleOnSetSelectorChange}
      />
    </Card>
  )
}

export default () => (
  <Fragment>
    <SetSelectorGroupExample />
  </Fragment>
)
