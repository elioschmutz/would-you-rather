import React, { Component } from 'react'
import { loginUser } from '../actions/shared.js'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class LoginView extends Component {
  state = {
    redirectToReferrer: false,
    username: '',
    password: '',
    showLoginErrorMessage: false,
    loading: false,
    autoLogin: false
  }

  loginErrorTimeout = 5000
  currentLoginErrorTimeoutObj = null

  componentDidMount() {
    this.handleAutoLogin()
  }

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
    this.props.dispatch(handleInitialData())
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

  handleAutoLogin() {
    if (this.state.autoLogin === true) {
      // Useful for development
      this.handleLogin('sarahedo', 'secret')
    }
  }

  handleLogin(username, password) {
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

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state
    this.handleLogin(username, password)
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { username, password, redirectToReferrer, showLoginErrorMessage, autoLogin } = this.state

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
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    data-tip="i.e. sarahedo"
                    type="username"
                    className="form-control"
                    id="username"
                    aria-describedby="usernameHelp"
                    placeholder="Enter username"
                    required
                    value={username}
                    onChange={this.handleUsernameChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    data-tip="default password of existing users is: `secret`"
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={this.handlePasswordChange}
                  />
                </div>
                <div className="row justify-content-betwee">
                  <div className="col-sm">
                    <button type="submit" disabled={this.state.loading} className="btn btn-primary">
                      Login
                    </button>
                  </div>
                  <div className="col-sm">
                    <Link to="/register" className="btn btn-outline-dark">
                      Sign-Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(LoginView)
