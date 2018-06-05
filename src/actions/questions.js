import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveQuestion } from '../_DATA.js'
import { addQuestionToUser } from './users.js'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(question) {
  return dispatch => {
    dispatch(showLoading())
    return _saveQuestion(question)
      .then(question => {
        dispatch(addQuestion(question))
        dispatch(addQuestionToUser(question))
      })
      .finally(() => {
        dispatch(hideLoading())
      })
  }
}
