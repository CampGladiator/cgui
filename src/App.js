import React from 'react'
import Dropdown from './components/atoms/Dropdown'
import Button from './components/atoms/Button'
import Icon from './components/atoms/Icon'
import Loader from './components/atoms/Loader'
import Card from './components/atoms/Card'
import Input from './components/atoms/Input'
import Fieldset from './components/atoms/Fieldset'
import FormLabel from './components/atoms/FormLabel'
import Growl from './components/atoms/Growl'

const toggleGrowl = () =>
  document.getElementById('growlInfo') &&
  document.getElementById('growlInfo').classList.toggle('cg-growl-msg--open')

function App() {
  return (
    <div className="App">
      <Card style={{ padding: '20px' }}>
        <form style={{ maxWidth: '550px', margin: 'auto' }}>
          <Fieldset>
            <FormLabel>Default Label</FormLabel>
            <Input placeholder="Default Input"></Input>
            <Input centered placeholder="Centered Input"></Input>
            <Input rounded placeholder="Rounded Input"></Input>
          </Fieldset>
          <Fieldset inline>
            <Input placeholder="Default Input"></Input>
            <Input separator placeholder="Separator Input"></Input>
          </Fieldset>
          <Fieldset inline>
            <Input placeholder="Default Input"></Input>
            <Input separator placeholder="Separator Input"></Input>
            <Input separator placeholder="Separator Input"></Input>
          </Fieldset>
          <Fieldset inline>
            <FormLabel>inline dropdown</FormLabel>
            <Dropdown options={[{ label: 'test', value: 'test' }]} />
          </Fieldset>
          <Fieldset>
            <FormLabel>block dropdown</FormLabel>
            <Dropdown options={[{ label: 'test', value: 'test' }]} />
          </Fieldset>
        </form>
      </Card>

      <Card style={{ padding: '20px' }}>
        <Button outline size="xsmall">
          Extra Small Outline
        </Button>
        <Button solid size="small">
          Small Primary
        </Button>
        <Button solid disabled>
          Disabled
        </Button>
        <Button secondary solid icon="check" size="large">
          With Icon
        </Button>
        <Button outline icon="check" size="large">
          With Icon
        </Button>
        <Button gray solid size="xlarge">
          With Icon
        </Button>
        <Button dark solid icon="check" size="xlarge">
          With Icon
        </Button>
      </Card>

      <Card style={{ padding: '20px' }}>
        <Icon name="arrow-left" size={20} primary />
        <Icon name="arrow-left" size={20} secondary />
        <Icon name="arrow-left" size={20} dark />
        <Icon name="arrow-left" size={20} gray />
        <Icon name="arrow-left" size={20} disabled />
      </Card>

      <Card style={{ padding: '20px' }}>
        <Loader />
        <Loader secondary />
        <Loader disabled />
        <Loader gray />
        <Loader dark />
      </Card>

      <Card style={{ padding: '20px' }}>
        <Button solid primary onClick={toggleGrowl}>
          Toggle Growl Message
        </Button>
        <Growl id="growlInfo" onClick={toggleGrowl}>
          This is a growl message.
        </Growl>
      </Card>
    </div>
  )
}

export default App
