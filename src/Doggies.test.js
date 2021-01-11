import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Doggies from './Doggies'

let doggiesOpts = { order: null, headerTitle: null, doggies: [] }
let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it("renders h3 with 'Doggies'", () => {
  act(() => {
    render(<Doggies doggiesOpts={doggiesOpts} />, container)
  })
  expect(container.querySelector('h3').textContent).toBe('Doggies')
})
it('render h1 with correct title', () => {
  act(() => {
    doggiesOpts.headerTitle = 'My Doggies'
    render(<Doggies doggiesOpts={doggiesOpts} />, container)
  })
  expect(container.querySelector('div.Doggies h1').textContent).toBe(
    'My Doggies'
  )

  act(() => {
    doggiesOpts.headerTitle = null
    render(<Doggies doggiesOpts={doggiesOpts} />, container)
  })
  expect(container.querySelector('div.Doggies h1').textContent).not.toBe(
    'My Doggies'
  )
})
