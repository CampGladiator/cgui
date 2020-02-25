import React, { useState } from 'react'
import Dropdown from './components/atoms/Dropdown'
import Button from './components/atoms/Button'
import Icon from './components/atoms/Icon'
import Loader from './components/atoms/Loader'
import Card from './components/atoms/Card'
import Input from './components/atoms/Input'
import Fieldset from './components/atoms/Fieldset'
import FormLabel from './components/atoms/FormLabel'
import Growl from './components/atoms/Growl'
import Checkbox from './components/atoms/Checkbox'
import Switch from './components/atoms/Switch'
import RadioGroup from './components/molecules/RadioGroup'
import ButtonGroup from './components/molecules/ButtonGroup'

const toggleGrowl = () =>
  document.getElementById('growlInfo') &&
  document.getElementById('growlInfo').classList.toggle('cg-growl-msg--open')

const handleCheckboxClick = checked =>
  console.log('handleCheckboxClick:', checked)

const handleOnRadioChange = selected =>
  console.log('handleOnRadioChange:', selected)

const testLeftClick = () => console.log('testLeftClick:', 'left click')

const testRightClick = () => console.log('testRightClick:', 'right click')

const onButtonClick = e => console.log('onButtonClick:', e.target)

const radioOptions = [
  {
    label: 'option 1',
    value: 'id1',
  },
  {
    label: 'option 2',
    value: 'id2',
  },
  {
    label: 'option 3',
    value: 'id3',
  },
]

function App() {
  const [switch1Status, setSwitch1Status] = useState(false)
  const [switch2Status, setSwitch2Status] = useState(false)

  const handleToggleSwitch1 = componentState => setSwitch1Status(componentState)
  const handleToggleSwitch2 = componentState => setSwitch2Status(componentState)

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
            <FormLabel>Inline Label</FormLabel>
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
        <Button
          outline
          size="xsmall"
          style={{ margin: '10px' }}
          onClick={onButtonClick}
        >
          Extra Small Outline
        </Button>
        <Button solid size="small" style={{ margin: '10px' }}>
          Small Primary
        </Button>
        <Button solid disabled style={{ margin: '10px' }}>
          Disabled
        </Button>
        <Button
          secondary
          solid
          icon="check"
          size="large"
          style={{ margin: '10px' }}
        >
          With Icon
        </Button>
        <Button outline icon="check" size="large" style={{ margin: '10px' }}>
          With Icon
        </Button>
        <Button gray solid size="xlarge" style={{ margin: '10px' }}>
          With Icon
        </Button>
        <Button
          dark
          solid
          icon="check"
          size="xlarge"
          style={{ margin: '10px' }}
        >
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
        <Loader style={{ margin: '20px' }} />
        <Loader style={{ margin: '20px' }} secondary />
        <Loader style={{ margin: '20px' }} disabled />
        <Loader style={{ margin: '20px' }} gray />
        <Loader style={{ margin: '20px' }} dark />
      </Card>

      <Card style={{ padding: '20px' }}>
        <Button solid primary onClick={toggleGrowl}>
          Toggle Growl Message
        </Button>
        <Growl id="growlInfo" onClick={toggleGrowl}>
          This is a growl message.
        </Growl>
      </Card>

      <Card style={{ padding: '20px' }}>
        <ButtonGroup
          primary
          content={{ left: 'default left', right: 'default right' }}
          defaultSelected="left"
          handleOnLeftClick={testLeftClick}
          style={{ padding: '10px 0' }}
        />
        <ButtonGroup
          secondary
          size="large"
          content={{ left: 'large left', right: 'large right' }}
          defaultSelected="right"
          handleOnLeftClick={testLeftClick}
          handleOnRightClick={testRightClick}
          style={{ padding: '10px 0' }}
        />
      </Card>

      <Card style={{ padding: '20px' }}>
        <Checkbox id="myCheckbox" checked style={{ marginBottom: '15px' }}>
          This is a checked checkbox
        </Checkbox>
        <Checkbox id="myCheckbox2" onClick={handleCheckboxClick}>
          This is an unchecked checkbox <a href="#test">with a link</a>
        </Checkbox>
      </Card>

      <Card style={{ padding: '20px' }}>
        <RadioGroup
          options={radioOptions}
          onChange={handleOnRadioChange}
        ></RadioGroup>
      </Card>

      <Card style={{ padding: '20px' }}>
        <Switch
          defaultOn
          onChange={handleToggleSwitch1}
          style={{ marginBottom: '20px' }}
        >
          This switch is currently {`${switch1Status ? 'On' : ' Off'}`}
        </Switch>

        <Switch onChange={handleToggleSwitch2}>
          This switch is currently {`${switch2Status ? 'On' : ' Off'}`}
        </Switch>
      </Card>
    </div>
  )
}

export default App
