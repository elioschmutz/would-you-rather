import React, { Component } from 'react'
import Heading from './Heading.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import UserName from './UserName.js'

class LeaderboardView extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  }

  count_answered(user) {
    return Object.keys(user.answers).length
  }

  count_asked(user) {
    return user.questions.length
  }

  count_total(user) {
    return this.count_answered(user) + this.count_asked(user)
  }

  render() {
    const { users } = this.props
    const sortedUsers = users.sort((a, b) => this.count_total(b) - this.count_total(a))
    return (
      <div>
        <Heading>Leaderboard</Heading>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">User</th>
                  <th scope="col"># asked</th>
                  <th scope="col"># answered</th>
                </tr>
              </thead>
              <tbody>
                {sortedUsers.map((user, index) => (
                  <tr key={user.id}>
                    <th className="align-middle">{index + 1}</th>
                    <td className="align-middle">
                      <UserName userid={user.id} />
                    </td>
                    <td className="align-middle">{this.count_asked(user)}</td>
                    <td className="align-middle">{this.count_answered(user)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({
  users: Object.values(users)
})

export default connect(mapStateToProps)(LeaderboardView)
