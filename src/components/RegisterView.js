import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ImageInput from './ImageInput'
import { handleAddUser } from '../actions/users.js'
import { connect } from 'react-redux'

class RegisterView extends Component {
  state = {
    username: '',
    name: '',
    password: '',
    passwordConfirmation: '',
    avatarURL: '',
    loading: false,
    redirectToLogin: false,
    passwordInvalidMessage: '',
    passwordConfirmationInvalidMessage: ''
  }

  handleUsernameChange = e => {
    this.setState({ username: e.target.value })
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value })
  }

  handlePasswordChange = e => {
    const field = e.target
    this.validateForm()
    this.setState({
      password: field.value
    })
  }

  handlePasswordConfirmationChange = e => {
    this.validateForm()
    this.setState({ passwordConfirmation: e.target.value })
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value })
  }

  handleAvatarURLChange = value => {
    this.setState({ avatarURL: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.validateForm()
    if (e.target.checkValidity()) {
      this.props.dispatch(handleAddUser(this.state)).then(() => {
        this.setState({ redirectToLogin: true })
      })
    }
    e.target.classList.add('was-validated')
  }

  getFormField(id) {
    return document.getElementsByTagName('form')[0].querySelectorAll(`input#${id}`)[0]
  }

  validatePasswordField = () => {
    const field = this.getFormField('password')
    field.setCustomValidity(field.validity.patternMismatch ? 'Must have at least 3 characters' : '')
    if (field.checkValidity()) {
      this.getFormField('passwordConfirmation').pattern = field.value
    }
    this.setState({
      passwordInvalidMessage: field.validationMessage
    })
  }

  validatePasswordConfirmationField = () => {
    const field = this.getFormField('passwordConfirmation')
    field.setCustomValidity(
      field.validity.patternMismatch ? 'Please enter the same password as above' : ''
    )
    this.setState({
      passwordConfirmationInvalidMessage: field.validationMessage
    })
  }

  validateForm = () => {
    this.validatePasswordField()
    this.validatePasswordConfirmationField()
  }

  render() {
    const {
      username,
      name,
      password,
      passwordConfirmation,
      redirectToLogin,
      showLoginErrorMessage
    } = this.state

    if (redirectToLogin === true) {
      return <Redirect to="/login" />
    }

    return (
      <div className="row h-100 d-flex justify-content-center align-items-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Sign-Up</div>
            {showLoginErrorMessage && (
              <div className="alert alert-warning" role="alert">
                Wrong username or password.
              </div>
            )}
            <div className="card-body">
              <form onSubmit={this.handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    aria-describedby="usernameHelp"
                    placeholder="Enter username"
                    autoComplete="username"
                    value={username}
                    required
                    onChange={this.handleUsernameChange}
                  />
                  <div className="invalid-feedback">Please choose a username.</div>
                </div>

                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="nameHelp"
                    placeholder="Enter name"
                    autoComplete="name"
                    value={name}
                    required
                    onChange={this.handleNameChange}
                  />
                  <div className="invalid-feedback">Please choose a name.</div>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    autoComplete="new-password"
                    placeholder="Password"
                    value={password}
                    required
                    pattern="^\S{3,}$"
                    onChange={this.handlePasswordChange}
                  />
                  <div className="invalid-feedback">{this.state.passwordInvalidMessage}</div>
                </div>
                <div className="form-group">
                  <label htmlFor="passwordConfirmation">Confirm password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordConfirmation"
                    placeholder="Confirm password"
                    value={passwordConfirmation}
                    autoComplete="off"
                    required
                    pattern="^\S{3,}$"
                    onChange={this.handlePasswordConfirmationChange}
                  />
                  <div className="invalid-feedback">
                    {this.state.passwordConfirmationInvalidMessage}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="avatarURL">Avatar</label>
                  <ImageInput
                    className="create-avatar-input"
                    name="avatarURL"
                    maxHeight={120}
                    onValueChange={this.handleAvatarURLChange}
                    required={true}
                  />
                  <div className="invalid-feedback">
                    {this.state.passwordConfirmationInvalidMessage}
                  </div>
                </div>
                <button type="submit" disabled={this.state.loading} className="btn btn-primary">
                  Sign-Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(RegisterView)
