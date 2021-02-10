import React from 'react'
import { shallow } from 'enzyme'
import Input from './Input'

describe('<Input />', () => {
  it('allows user provided attributes', () => {
    const inputAttributes = {
      autofocus: true,
      name: 'Attributes Name',
      value: 'Attributes Value',
    }

    expect(
      shallow(<Input {...inputAttributes} />).find(
        'input[autofocus][value][name]',
      ),
    ).toBeTruthy()
  })

  it('should allow additional, user provided classes', () => {
    expect(
      shallow(<Input className="custom-input"/>)
        .find('.custom-input')
        .hasClass('custom-input'),
    ).toBe(true)
  })
})
