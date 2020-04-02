import React, { Fragment } from 'react'
import SetSelectorGroupExample from './SetSelectorGroup'
import Tooltip from './Tooltip'
import FlasMessage from './FlashMessage'
import Modal from './Modal'
import PinInput from './PinInput'

export default () => (
  <Fragment>
    <Tooltip />
    <FlasMessage />
    <Modal />
    <SetSelectorGroupExample />
    <PinInput />
  </Fragment>
)
