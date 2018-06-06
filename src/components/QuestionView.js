import React, { Component } from 'react'
import { connect } from 'react-redux'
import Heading from './Heading.js'
import UserName from './UserName.js'
import QuestionOption from './QuestionOption.js'
import PropTypes from 'prop-types'
import { handleAnswerQuestion } from '../actions/questions.js'

class QuestionView extends Component {
  static propTypes = {
    authedUser: PropTypes.string,
    question: PropTypes.object,
    user: PropTypes.object
  }

  totalVotes() {
    const { question } = this.props
    return question.optionOne.votes.length + question.optionTwo.votes.length
  }

  showResult() {
    return this.props.question.id in this.props.user.answers
  }

  isOptionSelectedByCurrentUser(option) {
    return option.votes.includes(this.props.user.id)
  }

  handleOnVote = (option) => {
    const { dispatch, question } = this.props
    dispatch(handleAnswerQuestion(question, option))
  }

  render() {
    const { authedUser, question, user } = this.props

    return (
      <div>
        <Heading>Would You Rather</Heading>
        <div className="row">
          <div className="col col-sm-1">
            <small className="text-muted">
              <span>Posted by:</span>
            </small>
          </div>
          <div className="col col-sm-11">
            <small className="text-muted">
              <UserName userid={authedUser} />
            </small>
          </div>
        </div>
        {question &&
          user && (
            <div className="row my-3">
              <div className="col col-sm-5">
                <QuestionOption
                  id="optionOne"
                  text={question.optionOne.text}
                  totalOptionVotes={question.optionOne.votes.length}
                  totalVotes={this.totalVotes()}
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
                  totalVotes={this.totalVotes()}
                  selectedByCurrentUser={this.isOptionSelectedByCurrentUser(question.optionTwo)}
                  onVote={this.handleOnVote}
                  showResult={this.showResult()}
                />
              </div>
            </div>
          )}
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { question_id } = props.match.params
  return {
    authedUser,
    user: users[authedUser],
    question: questions[question_id]
  }
}
export default connect(mapStateToProps)(QuestionView)
