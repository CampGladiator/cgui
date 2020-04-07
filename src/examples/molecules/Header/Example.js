import React, { Fragment } from 'react'
import Header from '../../../components/molecules/Header'
import Logo from '../../../components/atoms/Logo'
import Button from '../../../components/atoms/Button'

const steps = [
  {
    label: 'Step One/Two',
    value: ['/page1', '/page2'],
  },
  {
    label: 'Step Three',
    value: '/page3',
  },
  {
    label: 'Step Four',
    value: ['/', '/page4', '/page5'],
  },
  {
    label: 'Step Six',
    value: '/page6',
  },
]

const DefaultHeader = () => {
  return (
    <div style={{ padding: '10px', backgroundColor: 'gray' }}>
      <h3> Default Header </h3>
      <Header />
    </div>
  )
}

const HeaderWithBorderLine = () => {
  return (
    <div style={{ padding: '10px' }}>
      <h3> Header With Border Line </h3>
      <Header bordered> Header With Border Line </Header>
    </div>
  )
}

const HeaderWithFixed = () => {
  return (
    <div style={{ padding: '10px', backgroundColor: 'gray' }}>
      <h3> Fixed Header </h3>
      <Header fixed bordered>
        <Header.Brand>
          <Logo.Icon width="10px" primary />
        </Header.Brand>
        <h2>Fixed Header Visible Here</h2>
      </Header>
    </div>
  )
}

const HeaderWithSomeContent = () => {
  return (
    <div style={{ padding: '10px', backgroundColor: 'gray' }}>
      <h3> Header With Content </h3>
      <Header> Header With Some Content </Header>
    </div>
  )
}

const HeaderWithCustomContent = () => {
  return (
    <div style={{ padding: '10px', backgroundColor: 'gray' }}>
      <h3> Header With Custom Content </h3>
      <Header>
        <Header.Content className="text-gladiator">
          Header With Some Custom Content
        </Header.Content>
      </Header>
    </div>
  )
}

const HeaderWithButtonContent = () => {
  return (
    <div style={{ padding: '10px', backgroundColor: 'gray' }}>
      <h3> Header With Button Content </h3>
      <Header>
        <Header.Content>
          <div>CampGladiator</div>
          <Button outline secondary size="small">
            PROFILE
          </Button>
        </Header.Content>
      </Header>
    </div>
  )
}

const HeaderWithSteps = () => {
  return (
    <div style={{ padding: '10px', backgroundColor: 'gray' }}>
      <h3> Header With Steps </h3>
      <Header>
        <Header.Steps steps={steps} currentSelectedStep={'/page3'} />
      </Header>
    </div>
  )
}

const HeaderWithContentSteps = () => {
  return (
    <div style={{ padding: '10px', backgroundColor: 'gray' }}>
      <h3> Header With Content Steps </h3>
      <Header>
        <Header.Content>
          <Header.Steps steps={steps} />
        </Header.Content>
      </Header>
    </div>
  )
}

const HeaderWithFullSteps = () => {
  return (
    <div style={{ padding: '10px', backgroundColor: 'gray' }}>
      <h3> Header With Full Steps Completed </h3>
      <Header>
        <Header.Steps steps={steps} currentSelectedStep="/page6" />
      </Header>
    </div>
  )
}

const HeaderStepWithBrandAndButton = () => {
  return (
    <div style={{ padding: '10px', backgroundColor: 'gray' }}>
      <h3> Header Steps with Brand and Button </h3>
      <Header>
        <Header.Brand>
          <Logo.Icon width="10px" primary />
        </Header.Brand>
        <Header.Steps steps={steps} currentSelectedStep={'/'} />
        <Button outline secondary size="small">
          PROFILE
        </Button>
      </Header>
    </div>
  )
}

export default () => (
  <Fragment>
    <DefaultHeader />
    <HeaderWithBorderLine />
    <HeaderWithFixed />
    <HeaderWithSomeContent />
    <HeaderWithCustomContent />
    <HeaderWithButtonContent />
    <HeaderWithSteps />
    <HeaderWithContentSteps />
    <HeaderWithFullSteps />
    <HeaderStepWithBrandAndButton />
  </Fragment>
)
