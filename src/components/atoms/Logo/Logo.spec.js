import React from 'react'
import { shallow } from 'enzyme'
import Logo from './Logo'

describe('<Logo />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Logo />)).not.toThrow()
  })

  it('allows user-provided classes', () => {
    expect(
      shallow(<Logo className="test-class" />)
        .find('.cg-logo__img')
        .hasClass('test-class'),
    ).toBe(true)
  })

  it('renders Logo.Icon with color attributes', () => {
    expect(
      shallow(<Logo.Icon primary />).hasClass('cg-logo__img__icon--primary'),
    ).toBe(true)

    expect(
      shallow(<Logo.Icon secondary />).hasClass('cg-logo__img__icon--secondary'),
    ).toBe(true)

    expect(
      shallow(<Logo.Icon white />).hasClass('cg-logo__img__icon--white'),
    ).toBe(true)

    expect(
      shallow(<Logo.Icon black />).hasClass('cg-logo__img__icon--black'),
    ).toBe(true)

    expect(
      shallow(<Logo.Icon gray />).hasClass('cg-logo__img__icon--gray'),
    ).toBe(true)

    expect(
      shallow(<Logo.Icon light />).hasClass('cg-logo__img__icon--light'),
    ).toBe(true)
  })

  it('renders Logo.Full with color attributes', () => {
    expect(
      shallow(<Logo.Full primary />).hasClass('cg-logo__img__full--primary'),
    ).toBe(true)

    expect(
      shallow(<Logo.Full secondary />).hasClass('cg-logo__img__full--secondary'),
    ).toBe(true)

    expect(
      shallow(<Logo.Full white />).hasClass('cg-logo__img__full--white'),
    ).toBe(true)

    expect(
      shallow(<Logo.Full black />).hasClass('cg-logo__img__full--black'),
    ).toBe(true)

    expect(
      shallow(<Logo.Full mono />).hasClass('cg-logo__img__full--mono'),
    ).toBe(true)
  })
})
