import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Button from './Button'
import Loader from '../Loader/Loader'
import bp from '../../../utilities/breakpoints'

describe('<Button />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Button />)).not.toThrow()
  })

  it('accepts any extra classes', () => {
    expect(
      shallow(<Button className="my-button" />).hasClass('my-button'),
    ).toBe(true)
  })

  it('accepts custom id', () => {
    expect(
      shallow(<Button id="testingTheId" />).find('#testingTheId'),
    ).toBeTruthy()
  })

  it('renders button with modifier class', () => {
    expect(shallow(<Button solid />).hasClass('cg-button--solid')).toBe(true)
  })

  it('should add `disabled` attribute to the element', () => {
    expect(
      shallow(<Button disabled />).find('.cg-button[disabled]'),
    ).toBeTruthy()
  })

  it('should add size as a modifier class', () => {
    expect(
      shallow(<Button size="xsmall" />).hasClass('cg-button--xsmall'),
    ).toBe(true)
  })

  it('should add size class for the given breakpoint', () => {
    expect(
      shallow(<Button media={{ [bp.phoneOnly]: 'xsmall' }} />).hasClass(
        'cg-button--xsmall@phone-only',
      ),
    ).toBe(true)
  })

  it('renders a loader when in loading state', () => {
    expect(shallow(<Button loading />).contains(<Loader white={false} />)).toBe(
      true,
    )
  })

  it('renders a white loader the button is solid and loading', () => {
    expect(shallow(<Button solid loading />).contains(<Loader white />)).toBe(
      true,
    )
  })

  it('calls `onClick` handler', () => {
    const handler = sinon.spy()

    shallow(<Button onClick={handler} />)
      .find('button')
      .simulate('click')

    expect(handler).toHaveProperty('callCount', 1)
  })
})
