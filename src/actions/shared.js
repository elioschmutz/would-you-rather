import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import { _getQuestions } from '../_DATA.js'
import { _getUsers } from '../_DATA.js'

export function handleInitialData() {
  return (dispatch) => {
    _getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions))
    })
    _getUsers().then((users) => {
      dispatch(receiveUsers(users))
    })
  }
}
