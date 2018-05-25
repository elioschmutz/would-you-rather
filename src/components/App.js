import React, { Component, Fragment } from 'react'
import Navigation from './Navigation.js'
import DashboardView from './DashboardView.js'
import { BrowserRouter as Router } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount = () => {
    this.props.store.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Navigation />
          <div className="App h-100 container">
            <DashboardView />
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default App
