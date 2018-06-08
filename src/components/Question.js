import React, { Component } from 'react'
import QuestionOption from './QuestionOption.js'
import PropTypes from 'prop-types'
import { handleAnswerQuestion } from '../actions/questions.js'
import { connect } from 'react-redux'

class Question extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  }

  showResult() {
    return this.props.question.id in this.props.user.answers
  }

  isOptionSelectedByCurrentUser(option) {
    return option.votes.includes(this.props.user.id)
  }

  handleOnVote = option => {
    const { dispatch, question } = this.props
    dispatch(handleAnswerQuestion(question, option))
  }

  render() {
    const { question } = this.props
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length

    return (
      <div className="row my-3">
        <div className="col col-sm-5">
          <QuestionOption
            id="optionOne"
            text={question.optionOne.text}
            totalOptionVotes={question.optionOne.votes.length}
            totalVotes={totalVotes}
            selectedByCurrentUser={this.isOptionSelectedByCurrentUser(question.optionOne)}
            onVote={this.handleOnVote}
            showResult={this.showResult()}
          />
        </div>
        <div className="col col-sm-2 or">or</div>
        <div className="col col-sm-5">
          <QuestionOption
            id="optionTwo"
            text={question.optionTwo.text}
            totalOptionVotes={question.optionTwo.votes.length}
            totalVotes={totalVotes}
            selectedByCurrentUser={this.isOptionSelectedByCurrentUser(question.optionTwo)}
            onVote={this.handleOnVote}
            showResult={this.showResult()}
          />
        </div>
      </div>
    )
  }
}

export default connect()(Question)
