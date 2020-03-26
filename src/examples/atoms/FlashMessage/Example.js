import React, { Fragment } from 'react'
import FlashMessage from '../../../components/molecules/FlashMessage'
import Card from '../../../components/atoms/Card'
import Button from '../../../components/atoms/Button'

const FlashMessageExample = () => {
  return (
    <Card style={{ padding: '30px' }}>
      <FlashMessage show count={3} text="Link alert message goes here">
        <Button outline white>
          action
        </Button>
      </FlashMessage>
    </Card>
  )
}

export default () => (
  <Fragment>
    <FlashMessageExample />
  </Fragment>
)
