import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class QuestionOption extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    totalOptionVotes: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    totalVotes: PropTypes.number.isRequired,
    selectedByCurrentUser: PropTypes.bool.isRequired,
    showResult: PropTypes.bool.isRequired,
    onVote: PropTypes.func.isRequired
  }

  calculateRatio(total, slice) {
    return total <= 0 ? 0 : 100 / total * slice
  }

  renderTotalVotes() {
    const { totalOptionVotes, totalVotes } = this.props
    const ratio = Math.round(this.calculateRatio(totalVotes, totalOptionVotes))
    return `${ratio}%`
  }

  renderVotes() {
    const { totalOptionVotes } = this.props
    const text = totalOptionVotes === 1 ? 'vote' : 'votes'
    return `${totalOptionVotes} ${text}`
  }

  handleOnVote() {
    const { showResult, onVote, id } = this.props

    if (showResult) {
      return
    }

    onVote(id)
  }

  render() {
    const { text, selectedByCurrentUser, showResult } = this.props

    return (
      <div
        className={`card
          ${!showResult && 'pointer'}
          ${showResult && !selectedByCurrentUser ? 'text-white bg-dark' : ''}
          ${showResult && selectedByCurrentUser ? 'text-white bg-success' : ''}`}
        onClick={() => this.handleOnVote()}
      >
        <div className="card-body answer-container">
          <div className="answer-text">{text}</div>
          {showResult && (
            <Fragment>
              <div className="answer-votes">{this.renderVotes()}</div>
              <div className="answer-percentage">{this.renderTotalVotes()}</div>
              <div>
                {selectedByCurrentUser && <span className="badge badge-primary">My choice</span>}
              </div>
            </Fragment>
          )}
        </div>
      </div>
    )
  }
}

export default QuestionOption
