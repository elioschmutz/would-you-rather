import 'bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from 'redux'
import middleware from './middleware'

const store = createStore((previousState, action) => {}, middleware)

ReactDOM.render(<App store={store} />, document.getElementById('root'))
