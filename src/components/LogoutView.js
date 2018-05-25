import React from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser.js'
import { Redirect } from 'react-router-dom'

const Logout = (props) => {
  props.dispatch(setAuthedUser(null))
  return <Redirect to="/login" />
}

export default connect()(Logout)
