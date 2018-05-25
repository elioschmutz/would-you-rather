import React, { Component, Fragment } from 'react'
import Navigation from './Navigation.js'
import DashboardView from './DashboardView.js'
import LoginView from './LoginView.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount = () => {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Navigation />
          <LoadingBar />
          <div className="App h-100 container">
            <Route path="/" exact component={DashboardView} />
            <Route path="/login" exact component={LoginView} />
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App)
