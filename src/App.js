import React from 'react'
import Dropdown from './components/Dropdown'
import Button from './components/Button'
import Icon from './components/Icon'
import Loader from './components/Loader'

function App() {
  return (
    <div className="App">
      <h1>Form</h1>
      <form>
        <Dropdown
          label="inline"
          inline
          options={[{ label: 'test', value: 'test' }]}
        />
        <Dropdown label="block" options={[{ label: 'test', value: 'test' }]} />
      </form>

      <Button solid size="small">
        Small Primary
      </Button>

      <Button secondary solid icon="check" size="large">
        With Icon
      </Button>
      <Button outline icon="check" size="large">
        With Icon
      </Button>
      <Button secondary outline icon="check" size="large">
        With Icon
      </Button>
      <Button dark outline icon="check" size="large">
        With Icon
      </Button>
      <Button gray outline icon="check" size="large">
        With Icon
      </Button>
      <Button white solid icon="check" size="large">
        With Icon
      </Button>

      <Icon name="arrow-left" size={20} primary />
      <Icon name="arrow-left" size={20} secondary />
      <Icon name="arrow-left" size={20} dark />
      <Icon name="arrow-left" size={20} gray />
      <Icon name="arrow-left" size={20} white />

      <Loader />
      <Loader secondary />
      <Loader disabled />
      <Loader gray />
      <Loader dark />
      <Loader white/>
    </div>
  )
}

export default App
