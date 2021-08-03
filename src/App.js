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
import Chart from './components/atoms/Chart'
import ImageLabel from './components/atoms/ImageLabel'
import SetSelector from './components/atoms/SetSelector'
import Logo from './components/atoms/Logo'
import Avatar from './components/atoms/Avatar'
import ProgressBar from './components/atoms/ProgressBar'
import Badge from './components/atoms/Badge'
import CreditCard from './components/atoms/CreditCard'
import Heading from './components/atoms/Heading'
import Callout from './components/atoms/Callout'
import RadioGroup from './components/molecules/RadioGroup'
import ButtonGroup from './components/molecules/ButtonGroup'
import Steps from './components/molecules/Steps'
import Countdown from './components/atoms/Countdown'
import Atoms from './examples/atoms'
import Molecules from './examples/molecules'

const toggleGrowl = () =>
  document.getElementById('growlInfo') &&
  document.getElementById('growlInfo').classList.toggle('cg-growl-msg--open')

const handleCheckboxClick = (checked) =>
  console.log('handleCheckboxClick:', checked)

const handleOnRadioChange = (selected) =>
  console.log('handleOnRadioChange:', selected)

const testLeftClick = () => console.log('testLeftClick:', 'left click')

const testRightClick = () => console.log('testRightClick:', 'right click')

const onButtonClick = (e) => console.log('onButtonClick:', e.target)

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

  const handleToggleSwitch1 = (componentState) =>
    setSwitch1Status(componentState)
  const handleToggleSwitch2 = (componentState) =>
    setSwitch2Status(componentState)

  return (
    <div className="App">
      <Card style={{ padding: '50px' }}>
        <form style={{ maxWidth: '550px', margin: 'auto' }}>
          <Fieldset>
            <FormLabel>Default Label</FormLabel>
            <Input placeholder="Default Input"></Input>
          </Fieldset>
          <Fieldset>
            <FormLabel>Disabled Input</FormLabel>
            <Input placeholder="Default Input" disabled></Input>
          </Fieldset>
          <Fieldset inline>
            <FormLabel>Inline Label</FormLabel>
            <Input placeholder="Default Input"></Input>
          </Fieldset>
          <Fieldset inline>
            <Input placeholder="Default Input"></Input>
            <Input separator placeholder="Default Input"></Input>
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

      <Card style={{ margin: '20px' }} flat>
        <Countdown
          endTime={2019621601000}
          data-test="test"
          className="test test2"
          title="test"
        />
      </Card>

      <Card style={{ margin: '20px' }} flat>
        <Button
          outline
          size="xsmall"
          style={{ margin: '10px' }}
          onClick={onButtonClick}
          id="testButtonId"
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

      <Card style={{ margin: '20px' }} raised>
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
          content={{ left: 'default left', right: 'default right' }}
          style={{ padding: '10px 0' }}
        />
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

      <Card style={{ padding: '20px' }}>
        <Chart large>12</Chart>
        <Chart normal>6</Chart>
        <Chart small>2</Chart>
      </Card>

      <Card style={{ paddig: '20px' }}>
        <div
          style={{
            width: '600px',
            padding: '20px',
            display: 'grid',
            gridTemplateRows: 'repeat(2, 1fr)',
            gridTemplateColumns: 'auto',
            gridAutoFlow: 'column',
            justifyItems: 'center',
            alignItems: 'center',
            gap: '0',
          }}
        >
          <figure style={{ position: 'relative' }}>
            <img
              src="https://cgui.campgladiator.com/images/shirt.jpg"
              alt="red CG shirt"
              style={{ maxWidth: '100%' }}
            />
            <ImageLabel primary>on sale</ImageLabel>
          </figure>
          <figure style={{ position: 'relative' }}>
            <img
              src="https://cgui.campgladiator.com/images/shirt.jpg"
              alt="red CG shirt"
              style={{ maxWidth: '100%' }}
            />
            <ImageLabel position="topLeft" secondary>
              featured
            </ImageLabel>
          </figure>
          <figure style={{ position: 'relative' }}>
            <img
              src="https://cgui.campgladiator.com/images/shirt.jpg"
              alt="red CG shirt"
              style={{ maxWidth: '100%' }}
            />
            <ImageLabel position="bottomRight" small>
              reduced
            </ImageLabel>
          </figure>
          <figure style={{ position: 'relative' }}>
            <img
              src="https://cgui.campgladiator.com/images/shirt.jpg"
              alt="red CG shirt"
              style={{ maxWidth: '100%' }}
            />
            <ImageLabel position="bottomLeft" small>
              sold out
            </ImageLabel>
          </figure>
        </div>
      </Card>

      <Card style={{ padding: '20px' }}>
        <SetSelector>x</SetSelector>
        <SetSelector disabled>xs</SetSelector>
        <SetSelector selected>m</SetSelector>
        <SetSelector>
          <Icon name="check" size={20} />
        </SetSelector>
      </Card>

      <Card style={{ padding: '20px' }}>
        <div
          style={{
            margin: '20px',
          }}
        >
          <ProgressBar percentCompleted={75} />
        </div>
        <div
          style={{
            margin: '20px',
          }}
        >
          <ProgressBar percentCompleted={50} />
        </div>
        <div
          style={{
            margin: '20px',
          }}
        >
          <ProgressBar percentCompleted={25} progressColor="#263746" />
        </div>
        <div
          style={{
            margin: '20px',
          }}
        >
          <ProgressBar percentCompleted={80} progressColor="#263746" />
        </div>
        <div
          style={{
            margin: '20px',
          }}
        >
          <ProgressBar percentCompleted={100} progressColor="#263746" />
        </div>
      </Card>

      <Card style={{ padding: '20px', backgroundColor: '#bbb' }}>
        <Logo.Icon width="10px" style={{ padding: '30px' }} primary />
        <Logo.Icon width="50px" style={{ padding: '30px' }} secondary />
        <Logo.Icon width="50px" style={{ padding: '30px' }} black />
        <Logo.Icon width="50px" style={{ padding: '30px' }} white />
        <Logo.Icon width="50px" style={{ padding: '30px' }} light />
        <Logo.Icon width="50px" style={{ padding: '30px' }} gray />
        <hr />
        <Logo.Full width="30px" style={{ padding: '30px' }} primary />
        <Logo.Full style={{ padding: '30px' }} secondary />
        <Logo.Full style={{ padding: '30px' }} black />
        <Logo.Full style={{ padding: '30px' }} white />
        <Logo.Full style={{ padding: '30px' }} mono />
      </Card>

      <Card style={{ padding: '20px' }}>
        <Avatar style={{ margin: '20px' }} />
        <Avatar
          alt="me"
          src="https://en.gravatar.com/userimage/32884912/b318719acf13489f60cba203b71e4d15.png?size=200"
          style={{ margin: '20px' }}
        />
      </Card>
      <Card style={{ padding: '20px', display: 'flex' }}>
        <Badge />
        <Badge bold />
        <Badge bronze />
        <Badge silver />
        <Badge gold />
        <Badge elite />
        <hr />
        <Badge type="plate" />
        <Badge type="plate" bold />
        <Badge type="plate" bronze />
        <Badge type="plate" silver />
        <Badge type="plate" gold />
        <Badge type="plate" elite />
        <hr />
        <Badge type="badge-with-plate" />
        <Badge type="badge-with-plate" bold />
        <Badge type="badge-with-plate" bronze />
        <Badge type="badge-with-plate" silver />
        <Badge type="badge-with-plate" gold />
        <Badge type="badge-with-plate" elite />
      </Card>
      <Card style={{ padding: '20px', display: 'flex' }}>
        <CreditCard style={{ margin: '5px' }} />
        <CreditCard amex style={{ margin: '5px' }} />
        <CreditCard diners style={{ margin: '5px' }} />
        <CreditCard discover style={{ margin: '5px' }} />
        <CreditCard jcb style={{ margin: '5px' }} />
        <CreditCard laser style={{ margin: '5px' }} />
        <CreditCard maestro style={{ margin: '5px' }} />
        <CreditCard mc style={{ margin: '5px' }} />
        <CreditCard visaelec style={{ margin: '5px' }} />
        <CreditCard visa style={{ margin: '5px' }} />
      </Card>
      <Card style={{ padding: '30px' }}>
        <div
          style={{
            margin: '20px',
          }}
        >
          <Callout style={{ width: '200px' }}></Callout>
        </div>

        <div
          style={{
            margin: '20px',
          }}
        >
          <Callout style={{ width: '600px' }}>HYLQ6893</Callout>
        </div>
      </Card>

      <Card style={{ padding: '20px' }}>
        <Heading>Heading 1</Heading>
        <Heading type="h2" font="primary" secondary>
          Heading 2
        </Heading>
        <Heading type="h3" font="primary" dark>
          Heading 3
        </Heading>
        <Heading type="h4" font="primary" gray>
          Heading 4
        </Heading>
        <Heading
          type="h5"
          font="primary"
          white
          style={{ backgroundColor: 'black' }}
        >
          Heading 5
        </Heading>
        <Heading type="h6" font="primary">
          Heading 6
        </Heading>

        <hr />

        <Heading font="display">Heading 1</Heading>
        <Heading type="h2" font="display" secondary>
          Heading 2
        </Heading>
        <Heading type="h3" font="display" dark>
          Heading 3
        </Heading>
        <Heading type="h4" font="display" gray>
          Heading 4
        </Heading>
        <Heading
          type="h5"
          font="display"
          white
          style={{ backgroundColor: 'black' }}
        >
          Heading 5
        </Heading>
        <Heading type="h6" font="display">
          Heading 6
        </Heading>
      </Card>
      <Card style={{ padding: '20px' }}>
        <Steps steps={['Step One', 'Step Two', 'Step Three', 'Step Four']} />
        <Steps
          currentSelectedStep={2}
          steps={['Step One', 'Step Two', 'Step Three', 'Step Four']}
        />
        <Steps
          currentSelectedStep={3}
          steps={['Step One', 'Step Two', 'Step Three', 'Step Four']}
        />
        <Steps
          currentSelectedStep={2}
          steps={[
            'Step One',
            'Step Two',
            'Step Three',
            'Step Four',
            'Step Five',
          ]}
        />
      </Card>
      <Atoms />
      <Molecules />
    </div>
  )
}

export default App
