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
        .find('.cg-badge')
        .hasClass('test-class'),
    ).toBe(true)
  })

  it('renders defalut Badge type with correct color attributes', () => {
    expect(shallow(<Badge />).hasClass('cg-badge--plain')).toBe(true)

    expect(shallow(<Badge bold />).hasClass('cg-badge--bold')).toBe(true)

    expect(shallow(<Badge bronze />).hasClass('cg-badge--bronze')).toBe(true)

    expect(shallow(<Badge silver />).hasClass('cg-badge--silver')).toBe(true)

    expect(shallow(<Badge gold />).hasClass('cg-badge--gold')).toBe(true)

    expect(shallow(<Badge elite />).hasClass('cg-badge--elite')).toBe(true)
  })

  it('renders plate badge type with correct color attributes', () => {
    expect(shallow(<Badge type="plate" />).hasClass('cg-plate--plain')).toBe(
      true,
    )

    expect(
      shallow(<Badge type="plate" bold />).hasClass('cg-plate--bold'),
    ).toBe(true)

    expect(
      shallow(<Badge type="plate" bronze />).hasClass('cg-plate--bronze'),
    ).toBe(true)

    expect(
      shallow(<Badge type="plate" silver />).hasClass('cg-plate--silver'),
    ).toBe(true)

    expect(
      shallow(<Badge type="plate" gold />).hasClass('cg-plate--gold'),
    ).toBe(true)

    expect(
      shallow(<Badge type="plate" elite />).hasClass('cg-plate--elite'),
    ).toBe(true)
  })

  it('renders badge-with-plate badge type with correct color attributes', () => {
    expect(
      shallow(<Badge type="badge-with-plate" />).hasClass(
        'cg-badge-with-plate--plain',
      ),
    ).toBe(true)

    expect(
      shallow(<Badge type="badge-with-plate" bold />).hasClass(
        'cg-badge-with-plate--bold',
      ),
    ).toBe(true)

    expect(
      shallow(<Badge type="badge-with-plate" bronze />).hasClass(
        'cg-badge-with-plate--bronze',
      ),
    ).toBe(true)

    expect(
      shallow(<Badge type="badge-with-plate" silver />).hasClass(
        'cg-badge-with-plate--silver',
      ),
    ).toBe(true)

    expect(
      shallow(<Badge type="badge-with-plate" gold />).hasClass(
        'cg-badge-with-plate--gold',
      ),
    ).toBe(true)

    expect(
      shallow(<Badge type="badge-with-plate" elite />).hasClass(
        'cg-badge-with-plate--elite',
      ),
    ).toBe(true)
  })
})
