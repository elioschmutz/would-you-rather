import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class QuestionList extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired
  }

  render() {
    const { questions } = this.props

    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="list-group">
              {questions.map(question => (
                <Link
                  key={question.id}
                  to={`/questions/${question.id}`}
                  className="list-group-item list-group-item-action"
                >
                  {question.optionOne.text} or {question.optionTwo.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionList
