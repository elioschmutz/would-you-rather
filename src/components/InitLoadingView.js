import React, { Fragment } from 'react'
import Heading from './Heading.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LoadingBar from 'react-redux-loading'
import { laodingbars } from '../config'

const InitLoadingView = props => {
  return (
    <Fragment>
      {props.showInitLoadingView ? (
        <div className="row h-100 d-flex justify-content-center align-items-center">
          <div className="col-md-4">
            <div className="text-center">
              <Heading>Loading...</Heading>
              <LoadingBar scope={laodingbars.init}/>
            </div>
          </div>
        </div>
      ) : (
        props.children
      )}
    </Fragment>
  )
}

InitLoadingView.propTypes = {
  showInitLoadingView: PropTypes.bool
}

const mapStateToProps = ({ shared }) => {
  return {
    showInitLoadingView: !shared.initDataReceived
  }
}

export default connect(mapStateToProps)(InitLoadingView)
