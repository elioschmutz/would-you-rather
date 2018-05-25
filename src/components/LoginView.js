import React, { Component } from 'react'

class LoginView extends Component {
  render() {
    return (
      <div className="row h-100 d-flex justify-content-center align-items-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form action="index.html">
                <div className="form-group">
                  <label htmlFor="email">E-Mail Adresse</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Anmelden
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginView
