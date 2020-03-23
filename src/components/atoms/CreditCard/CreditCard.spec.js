import React from 'react'
import { shallow } from 'enzyme'
import CreditCard from './CreditCard'

describe('<CreditCard />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<CreditCard />)).not.toThrow()
  })

  it('allows user-provided classes', () => {
    expect(
      shallow(<CreditCard className="test-class" />)
        .find('.cg-credit-card')
        .hasClass('test-class'),
    ).toBe(true)
  })

  it('renders defalut CreditCard with correct class name', () => {
    expect(
      shallow(<CreditCard />).hasClass('cg-credit-card--placeholder'),
    ).toBe(true)
  })

  it('renders american express CreditCard with correct class name', () => {
    expect(shallow(<CreditCard amex />).hasClass('cg-credit-card--amex')).toBe(
      true,
    )
  })

  it('renders diners CreditCard with correct class name', () => {
    expect(
      shallow(<CreditCard diners />).hasClass('cg-credit-card--diners'),
    ).toBe(true)
  })

  it('renders discover CreditCard with correct class name', () => {
    expect(
      shallow(<CreditCard discover />).hasClass('cg-credit-card--discover'),
    ).toBe(true)
  })

  it('renders jcb CreditCard with correct class name', () => {
    expect(shallow(<CreditCard jcb />).hasClass('cg-credit-card--jcb')).toBe(
      true,
    )
  })

  it('renders laser CreditCard with correct class name', () => {
    expect(
      shallow(<CreditCard laser />).hasClass('cg-credit-card--laser'),
    ).toBe(true)
  })

  it('renders maestro CreditCard with correct class name', () => {
    expect(
      shallow(<CreditCard maestro />).hasClass('cg-credit-card--maestro'),
    ).toBe(true)
  })

  it('renders master card CreditCard with correct class name', () => {
    expect(shallow(<CreditCard mc />).hasClass('cg-credit-card--mc')).toBe(true)
  })

  it('renders visa electron CreditCard with correct class name', () => {
    expect(
      shallow(<CreditCard visaelec />).hasClass('cg-credit-card--visaelec'),
    ).toBe(true)
  })

  it('renders visa CreditCard with correct class name', () => {
    expect(shallow(<CreditCard visa />).hasClass('cg-credit-card--visa')).toBe(
      true,
    )
  })
})
