import { _addUser } from '../_DATA.js'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER = 'ADD_USER'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'
export const USER_ANSWERED_QUESTION = 'USER_ANSWERED_QUESTION'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function addUser(user) {
  return {
    type: ADD_USER,
    user
  }
}

export function addQuestionToUser(question) {
  return {
    type: ADD_QUESTION_TO_USER,
    author: question.author,
    question
  }
}

export function handleAddUser({ username, name, password, avatarURL }) {
  return dispatch => {
    dispatch(showLoading())
    return _addUser(username, name, password, avatarURL)
      .then(user => {
        dispatch(addUser(user))
      })
      .finally(() => {
        dispatch(hideLoading())
      })
  }
}

export function userAnsweredQuestion(authedUser, question, answer) {
  return {
    type: USER_ANSWERED_QUESTION,
    question,
    answer,
    authedUser
  }
}
