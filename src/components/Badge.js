import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Badge extends Component {
  static propTypes = {
    showFallback: PropTypes.bool.isRequired
  }

  render() {
    const { showFallback, children, className } = this.props
    return <span className={`badge ${className}`}>{showFallback ? '-' : children}</span>
  }
}

export default Badge
