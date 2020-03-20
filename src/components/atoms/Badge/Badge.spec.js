import React from 'react'
import { shallow } from 'enzyme'
import Badge from './Badge'

describe('<Badge />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Badge />)).not.toThrow()
  })

  it('allows user-provided classes', () => {
    expect(
      shallow(<Badge className="test-class" />)
        .find('.badge')
        .hasClass('test-class'),
    ).toBe(true)
  })

  it('renders defalut Badge type with correct color attributes', () => {
    expect(shallow(<Badge />).hasClass('badge--plain')).toBe(true)

    expect(shallow(<Badge bold />).hasClass('badge--bold')).toBe(true)

    expect(shallow(<Badge bronze />).hasClass('badge--bronze')).toBe(true)

    expect(shallow(<Badge silver />).hasClass('badge--silver')).toBe(true)

    expect(shallow(<Badge gold />).hasClass('badge--gold')).toBe(true)

    expect(shallow(<Badge elite />).hasClass('badge--elite')).toBe(true)
  })

  it('renders plate badge type with correct color attributes', () => {
    expect(shallow(<Badge type="plate" />).hasClass('plate--plain')).toBe(true)

    expect(shallow(<Badge type="plate" bold />).hasClass('plate--bold')).toBe(
      true,
    )

    expect(
      shallow(<Badge type="plate" bronze />).hasClass('plate--bronze'),
    ).toBe(true)

    expect(
      shallow(<Badge type="plate" silver />).hasClass('plate--silver'),
    ).toBe(true)

    expect(shallow(<Badge type="plate" gold />).hasClass('plate--gold')).toBe(
      true,
    )

    expect(shallow(<Badge type="plate" elite />).hasClass('plate--elite')).toBe(
      true,
    )
  })

  it('renders badge-with-plate badge type with correct color attributes', () => {
    expect(
      shallow(<Badge type="badge-with-plate" />).hasClass(
        'badge-with-plate--plain',
      ),
    ).toBe(true)

    expect(
      shallow(<Badge type="badge-with-plate" bold />).hasClass(
        'badge-with-plate--bold',
      ),
    ).toBe(true)

    expect(
      shallow(<Badge type="badge-with-plate" bronze />).hasClass(
        'badge-with-plate--bronze',
      ),
    ).toBe(true)

    expect(
      shallow(<Badge type="badge-with-plate" silver />).hasClass(
        'badge-with-plate--silver',
      ),
    ).toBe(true)

    expect(
      shallow(<Badge type="badge-with-plate" gold />).hasClass(
        'badge-with-plate--gold',
      ),
    ).toBe(true)

    expect(
      shallow(<Badge type="badge-with-plate" elite />).hasClass(
        'badge-with-plate--elite',
      ),
    ).toBe(true)
  })
})
