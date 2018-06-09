import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FaIconHome from 'react-icons/lib/fa/home'
import FaIconPlus from 'react-icons/lib/fa/plus'
import FaListOl from 'react-icons/lib/fa/list-ol'
import FaAngleLeft from 'react-icons/lib/fa/angle-left'
import UserName from './UserName.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Navigation extends Component {
  static propTypes = {
    authedUser: PropTypes.string
  }

  render() {
    const { authedUser } = this.props

    return (
      <nav className="main-navigation navbar navbar-expand-md navbar-dark bg-primary">
        <Link to="/" className="navbar-brand">
          Would you rather?
        </Link>
        {authedUser && (
          <div className="collapse navbar-collapse" id="main-navigation">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <FaIconHome /> Overview
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add" className="nav-link">
                  <FaIconPlus /> Add question
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/leaderboard" className="nav-link">
                  <FaListOl /> Leaderboard
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  id="navbar-user-dropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <UserName userid={authedUser} />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbar-user-dropdown"
                >
                  <Link to="/logout" className="dropdown-item">
                    <FaAngleLeft /> Logout
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        )}
      </nav>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({ authedUser })
export default connect(mapStateToProps)(Navigation)
