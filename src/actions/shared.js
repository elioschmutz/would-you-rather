import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'
import { receiveUsers } from './users'
import { _getQuestions, _getUsers, _loginUser } from '../_DATA.js'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading())
    Promise.all([
      _getQuestions().then(questions => {
        dispatch(receiveQuestions(questions))
      }),
      _getUsers().then(users => {
        dispatch(receiveUsers(users))
      })
    ]).then(() => {
      dispatch(hideLoading())
    })
  }
}

export function loginUser(username, password) {
  return dispatch => {
    dispatch(showLoading())
    return _loginUser(username, password).then(user => {
      dispatch(setAuthedUser(user.id))
    }).finally(() => {
      dispatch(hideLoading())
    })
  }
}
