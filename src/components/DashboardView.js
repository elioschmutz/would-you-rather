import React, { Component } from 'react'
import Heading from './Heading.js'
import { connect } from 'react-redux'
import QuestionList from './QuestionList.js'
import Button from './Button.js'
import PropTypes from 'prop-types'

class DashboardView extends Component {
  state = {
    showAnswered: false
  }

  static propTypes = {
    questions: PropTypes.array.isRequired
  }

  showUnansweredQuestions = () => {
    this.setState({ showAnswered: false })
  }

  showAnsweredQuestions = () => {
    this.setState({ showAnswered: true })
  }

  isAnswered = question => {
    const { authedUser } = this.props
    return (
      question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
    )
  }
  render() {
    const { showAnswered } = this.state
    const { questions } = this.props

    const sortedQuestions = questions.sort((a, b) => b.timestamp - a.timestamp)
    const answeredQuestions = sortedQuestions.filter(question => this.isAnswered(question))
    const unansweredQuestions = sortedQuestions.filter(question => !this.isAnswered(question))

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
                  Unanswered <span className="badge badge-light">{unansweredQuestions.length}</span>
                </Button>
              </li>
              <li className="nav-item">
                <Button
                  className="nav-link"
                  active={showAnswered}
                  handleOnClick={this.showAnsweredQuestions}
                >
                  Answered <span className="badge badge-dark">{answeredQuestions.length}</span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <QuestionList questions={showAnswered ? answeredQuestions : unansweredQuestions} />
      </div>
    )
  }
}

const mapStateToProps = ({ questions, authedUser }) => ({
  questions: Object.values(questions),
  authedUser
})
export default connect(mapStateToProps)(DashboardView)
