import React, { Component } from 'react'
import { loginUser } from '../actions/shared.js'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class LoginView extends Component {
  state = {
    redirectToReferrer: false,
    username: '',
    password: '',
    showLoginErrorMessage: false,
    loading: false
  }

  loginErrorTimeout = 5000
  currentLoginErrorTimeoutObj = null

  componentWillUnmount() {
    this.clearCurrentLoginErrorTimeout()
  }

  handleUsernameChange = e => {
    this.setState({ username: e.target.value })
  }

  handlePasswordChange = e => {
    this.setState({ password: e.target.value })
  }

  handleLoginSuccessful() {
    this.setState({ redirectToReferrer: true })
  }

  clearCurrentLoginErrorTimeout() {
    clearTimeout(this.loginErrorTimeoutObj)
  }

  handleLoginFailed() {
    this.clearCurrentLoginErrorTimeout()
    this.setState({ showLoginErrorMessage: true })
    this.loginErrorTimeoutObj = setTimeout(() => {
      this.setState({ showLoginErrorMessage: false })
    }, this.loginErrorTimeout)
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state
    if (!username || !password) {
      return
    }
    this.setState({ loading: true })
    this.props
      .dispatch(loginUser(username, password))
      .finally(() => {
        this.setState({ loading: false })
      })
      .then(
        () => {
          this.handleLoginSuccessful()
        },
        () => {
          this.handleLoginFailed()
        }
      )
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { username, password, redirectToReferrer, showLoginErrorMessage } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div className="row h-100 d-flex justify-content-center align-items-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Login</div>
            {showLoginErrorMessage && (
              <div className="alert alert-warning" role="alert">
                Wrong username or password.
              </div>
            )}
            <div className="card-body">
              <form action="index.html" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="username"
                    className="form-control"
                    id="username"
                    aria-describedby="usernameHelp"
                    placeholder="Enter username"
                    value={username}
                    onChange={this.handleUsernameChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.handlePasswordChange}
                  />
                </div>
                <button type="submit" disabled={this.state.loading} className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(LoginView)
