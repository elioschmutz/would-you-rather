import React, { Component } from 'react'
import Heading from './Heading.js'

class DashboardView extends Component {
  render() {
    return (
      <div>
        <Heading>Questions</Heading>
        <div className="row my-3">
          <div className="col">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Unanswered <span className="badge badge-light">3</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Answered <span className="badge badge-dark">28</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="list-group">
              <a href="/question_answered.html" className="list-group-item list-group-item-action">
                Not know how to read or Not know how to write
              </a>
              <a href="/question.html" className="list-group-item list-group-item-action">
                Be horribly and hopelessly depressed or Have inescapable overwhelming anxiety
              </a>
              <a href="/question.html" className="list-group-item list-group-item-action">
                Be a centaur or Be a mermaid/man
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardView
