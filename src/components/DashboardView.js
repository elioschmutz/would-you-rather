import React, { Component } from 'react'
import Heading from './Heading.js'
import { connect } from 'react-redux'
import QuestionList from './QuestionList.js'
import Badge from './Badge.js'
import Button from './Button.js'
import PropTypes from 'prop-types'
import { setCurrentCategory } from '../actions/currentCategory'
import { categories } from '../config'

class DashboardView extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired,
    currentCategory: PropTypes.string.isRequired,
    authedUser: PropTypes.string.isRequired,
    loadingBar: PropTypes.bool.isRequired
  }

  showUnansweredQuestions = () => {
    this.props.dispatch(setCurrentCategory(categories.unanswered))
  }

  showAnsweredQuestions = () => {
    this.props.dispatch(setCurrentCategory(categories.answered))
  }

  isAnswered = question => {
    const { authedUser } = this.props
    return (
      question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
    )
  }
  render() {
    const { questions, currentCategory, loadingBar } = this.props

    const sortedQuestions = questions.sort((a, b) => b.timestamp - a.timestamp)
    const answeredQuestions = sortedQuestions.filter(question => this.isAnswered(question))
    const unansweredQuestions = sortedQuestions.filter(question => !this.isAnswered(question))

    const showAnswered = currentCategory === categories.answered
    const isLoading = loadingBar.default === 1

    return (
      <div>
        <Heading>Questions</Heading>
        <div className="row my-3">
          <div className="col">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Button
                  className="nav-link"
                  active={!showAnswered}
                  handleOnClick={this.showUnansweredQuestions}
                >
                  Unanswered{' '}
                  <Badge className="badge-light" showFallback={isLoading}>
                    {unansweredQuestions.length}
                  </Badge>
                </Button>
              </li>
              <li className="nav-item">
                <Button
                  className="nav-link"
                  active={showAnswered}
                  handleOnClick={this.showAnsweredQuestions}
                >
                  Answered{' '}
                  <Badge className="badge-dark" showFallback={isLoading}>
                    {answeredQuestions.length}
                  </Badge>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        {!isLoading && (
          <QuestionList questions={showAnswered ? answeredQuestions : unansweredQuestions} />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ questions, authedUser, currentCategory, loadingBar }) => ({
  questions: Object.values(questions),
  authedUser,
  currentCategory,
  loadingBar
})
export default connect(mapStateToProps)(DashboardView)
