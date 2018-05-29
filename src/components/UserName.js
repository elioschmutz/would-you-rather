import './UserName.css'
import React from 'react'
import PropTypes from 'prop-types'

const UserName = props => {
  return (
    <div className="user-name">
      <div
        style={{ backgroundImage: `url("${props.image || './fallback-user.png'}")` }}
        className="user-image"
      />
      <span>{props.name}</span>
    </div>
  )
}

UserName.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string
}

export default UserName
