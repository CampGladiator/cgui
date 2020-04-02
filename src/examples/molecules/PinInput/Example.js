import React, { Fragment } from 'react'
import Card from '../../../components/atoms/Card'
import PinInput from '../../../components/molecules/PinInput'

const DefaultPinInput = () => {
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Default Pin Input </h3>
      <PinInput />
    </Card>
  )
}

const PinInputWithOnChange = () => {
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Pin Input With On Change </h3>
      <PinInput
        onPinChanged={({ userPin }) => console.log('userPin', userPin)}
      />
    </Card>
  )
}

const PinInputWithNoOfInput = () => {
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Pin Input With 5 Input </h3>
      <PinInput
        noOfInput={5}
        onPinChanged={({ userPin }) => console.log('userPin', userPin)}
      />
    </Card>
  )
}

const PinInputWithDefaultValue = () => {
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Pin Input With Default Value </h3>
      <PinInput
        value="1234"
        onPinChanged={({ userPin }) => console.log('userPin', userPin)}
      />
    </Card>
  )
}

export default () => (
  <Fragment>
    <DefaultPinInput />
    <PinInputWithOnChange />
    <PinInputWithNoOfInput />
    <PinInputWithDefaultValue />
  </Fragment>
)
