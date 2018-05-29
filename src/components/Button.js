import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  return (
    <button
      className={`${props.className} ${props.active ? 'active' : ''}`}
      onClick={props.handleOnClick}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  handleOnClick: PropTypes.func.isRequired
}

export default Button
