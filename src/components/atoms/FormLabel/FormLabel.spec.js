import React from 'react'
import { shallow } from 'enzyme'
import FormLabel from './FormLabel'

describe('<FormLabel />', () => {
  it('should allow additional, user provided classes', () => {
    expect(
      shallow(<FormLabel className={'test-class'} />)
        .find('.cg-label')
        .hasClass('test-class'),
    ).toBe(true)
  })
})
