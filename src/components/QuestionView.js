import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Heading from './Heading.js'
import UserName from './UserName.js'
import Question from './Question.js'
import PropTypes from 'prop-types'
import NotFoundView from './NotFoundView.js'

class QuestionView extends Component {
  static propTypes = {
    question: PropTypes.object,
    user: PropTypes.object,
    isLoading: PropTypes.bool
  }

  render() {
    const { question, user, isLoading } = this.props

    if (!isLoading && !question) {
      return <NotFoundView />
    }

    return (
      <div>
        <Heading>Would You Rather</Heading>
        {!isLoading && (
          <Fragment>
            <div className="row">
              <div className="col col-sm-1">
                <small className="text-muted">
                  <span>Posted by:</span>
                </small>
              </div>
              <div className="col col-sm-11">
                <small className="text-muted">
                  {question && <UserName userid={question.author} />}
                </small>
              </div>
            </div>
            {question && user && <Question question={question} user={user} />}
          </Fragment>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, questions, users, loadingBar }, props) => {
  const { question_id } = props.match.params
  return {
    user: users[authedUser],
    question: questions[question_id],
    isLoading: loadingBar.default === 1
  }
}
export default connect(mapStateToProps)(QuestionView)
