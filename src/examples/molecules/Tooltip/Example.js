import React, { Fragment } from 'react'
import Card from '../../../components/atoms/Card'
import Tooltip from '../../../components/molecules/Tooltip'

const DefaultTooltip = () => {
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Default Tooltip </h3>
      <Tooltip>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Content>Tooltip Message</Tooltip.Content>
      </Tooltip>
    </Card>
  )
}

const TooltipAsDiv = () => {
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Div Tooltip </h3>
      <Tooltip as="div">
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Content>Tooltip Message</Tooltip.Content>
      </Tooltip>
    </Card>
  )
}

const FixedTooltip = () => {
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Fixed Tooltip </h3>
      <Tooltip fixed>
        <Tooltip.Trigger>I'm Here</Tooltip.Trigger>
        <Tooltip.Content>Tooltip Message</Tooltip.Content>
      </Tooltip>
    </Card>
  )
}

const DataAsTooltip = () => {
  return (
    <Card style={{ padding: '20px' }}>
      <h3> Data Attribute Tooltip </h3>
      <span data-tooltip="Message Here">Hover Me!</span>
    </Card>
  )
}
export default () => (
  <Fragment>
    <DefaultTooltip />
    <FixedTooltip />
    <TooltipAsDiv />
    <DataAsTooltip />
  </Fragment>
)
