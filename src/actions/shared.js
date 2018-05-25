import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import { _getQuestions } from '../_DATA.js'
import { _getUsers } from '../_DATA.js'
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
