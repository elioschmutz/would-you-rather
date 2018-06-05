import React, { Component } from 'react'
import { handleAddQuestion } from '../actions/questions.js'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Heading from './Heading.js'

class AddQuestionView extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    redirectToFrontPage: false,
    loading: false
  }

  handleOptionOneTextChange = e => {
    this.setState({ optionOneText: e.target.value })
  }

  handleOptionTwoTextChange = e => {
    this.setState({ optionTwoText: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { optionOneText, optionTwoText } = this.state
    const { dispatch } = this.props

    this.setState({ loading: true })

    dispatch(
      handleAddQuestion({
        optionOneText,
        optionTwoText,
        author: this.props.authedUser
      })
    )
      .finally(() => {
        this.setState({ loading: false })
      })
      .then(() => this.setState({ redirectToFrontPage: true }))
  }

  render() {
    const { optionOneText, optionTwoText, redirectToFrontPage, loading } = this.state

    if (redirectToFrontPage === true) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <Heading>Would You Rather</Heading>
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="optionOne">Option one</label>
                <input
                  type="text"
                  className="form-control"
                  id="optionOne"
                  placeholder="Enter option one"
                  required
                  value={optionOneText}
                  onChange={this.handleOptionOneTextChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="optionTwo">Option two</label>
                <input
                  type="text"
                  className="form-control"
                  id="optionTwo"
                  placeholder="Enter option two"
                  required
                  value={optionTwoText}
                  onChange={this.handleOptionTwoTextChange}
                />
              </div>
              <div className="row">
                <div className="col-sm">
                  <button
                    type="submit"
                    disabled={loading ? 'disabled' : ''}
                    className="btn btn-primary"
                  >
                    Add question
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({ authedUser })
export default connect(mapStateToProps)(AddQuestionView)
