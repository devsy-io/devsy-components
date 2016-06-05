import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Card from '../../src/Card'

describe('<Card />', () => {
  it('renders a Card component', () => {
    const card = shallow(<Card />)
    expect(card).to.exist
  })
})
