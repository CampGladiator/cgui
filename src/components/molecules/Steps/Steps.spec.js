import React from 'react'
import { shallow, mount } from 'enzyme'
import Steps from './Steps'

const steps = ['Step One', 'Step Two', 'Step Three', 'Step Four']
const currentSelectedStep = 2
describe('<Steps />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Steps />)).not.toThrow()
  })

  it('accepts any extra classes', () => {
    expect(
      shallow(<Steps steps={steps} className="my-steps" />).hasClass(
        'my-steps',
      ),
    ).toBe(true)
  })

  it('renders the step item with class', () => {
    const renderedComponent = mount(<Steps steps={steps} />)
    expect(renderedComponent.find('.cg-step').length).toBe(steps.length)
  })

  it('renders the step with correct active step', () => {
    const expected =
      '<ul class="cg-steps"><li class="cg-step "><span class="cg-step__bullet">1</span><h3 class="cg-step__text">Step One</h3></li><li class="cg-step "><span class="cg-step__bullet">2</span><h3 class="cg-step__text">Step Two</h3></li><li class="cg-step cg-step--current"><span class="cg-step__bullet">3</span><h3 class="cg-step__text">Step Three</h3></li><li class="cg-step cg-step--disabled"><span class="cg-step__bullet">4</span><h3 class="cg-step__text">Step Four</h3></li></ul>'
    const renderedComponent = mount(
      <Steps steps={steps} currentSelectedStep={currentSelectedStep} />,
    )
    expect(renderedComponent.html()).toBe(expected)
  })
})
