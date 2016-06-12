import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import './components/index.scss'

const div = document.createElement('div')
document.body.appendChild(div)

ReactDom.render(
  <App />,
  div
)
