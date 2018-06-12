import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { resetState } from '../actions/shared'

const Logout = (props) => {
  props.dispatch(resetState())
  return <Redirect to="/login" />
}

export default connect()(Logout)
