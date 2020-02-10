import React from 'react'
import Dropdown from './components/Dropdown'
import Button from './components/Button'
// import './cgui.scss'

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

      <Button solid icon="check" size="large">
        With Icon
      </Button>
    </div>
  )
}

export default App
