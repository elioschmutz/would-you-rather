import 'bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from 'redux'

const store = createStore((previousState, action) => {})

ReactDOM.render(<App store={store} />, document.getElementById('root'))
