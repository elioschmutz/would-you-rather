import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import InitLoadingView from './InitLoadingView.js'

// https://tylermcginnis.com/react-router-protected-routes-authentication/
const PrivateRoute = ({ component: Component, authedUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authedUser ? (
        <InitLoadingView>
          <Component {...props} />
        </InitLoadingView>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

PrivateRoute.propTypes = {
  authedUser: PropTypes.string
}

const mapStateToProps = ({ authedUser }) => ({ authedUser })
export default connect(mapStateToProps, null, null, { pure: false })(PrivateRoute)
