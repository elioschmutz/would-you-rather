import React, { Component, Fragment } from 'react'
import Navigation from './Navigation.js'
import DashboardView from './DashboardView.js'
import LoginView from './LoginView.js'
import LogoutView from './LogoutView.js'
import RegisterView from './RegisterView.js'
import LeaderboardView from './LeaderboardView.js'
import AddQuestionView from './AddQuestionView.js'
import NotFoundView from './NotFoundView.js'
import PrivateRoute from './PrivateRoute.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navigation />
          <LoadingBar />
          <div className="App h-100 container">
            <Switch>
              <PrivateRoute path="/" exact component={DashboardView} />
              <PrivateRoute path="/leaderboard" exact component={LeaderboardView} />
              <PrivateRoute path="/add" exact component={AddQuestionView} />
              <Route path="/login" exact component={LoginView} />
              <Route path="/register" exact component={RegisterView} />
              <PrivateRoute path="/logout" exact component={LogoutView} />
              <Route component={NotFoundView} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App)
