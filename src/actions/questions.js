import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveQuestion, _saveQuestionAnswer } from '../_DATA.js'
import { addQuestionToUser, userAnsweredQuestion } from './users.js'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

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

export function answerQuestion(authedUser, question, answer) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    question,
    answer
  }
}
export function handleAnswerQuestion(question, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(answerQuestion(authedUser, question, answer))
    dispatch(userAnsweredQuestion(authedUser, question), answer)
    return _saveQuestionAnswer({ authedUser, qid: question.id, answer })
  }
}
