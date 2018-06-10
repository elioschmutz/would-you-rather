import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class UserName extends Component {
  static propTypes = {
    userid: PropTypes.string.isRequired
  }

  render() {
    const { users, userid } = this.props
    const user = users[userid]

    if (!user) {
      return ''
    }

    return (
      <div className="user-name">
        <div
          style={{ backgroundImage: `url("${user.avatarURL || './fallback-user.png'}")` }}
          className="user-image"
        />
        <span>{user.name}</span>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })
export default connect(mapStateToProps)(UserName)
