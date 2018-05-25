import { receiveQuestions } from './questions'
import { _getQuestions } from '../_DATA.js'

export function handleInitialData() {
  return (dispatch) => {
    _getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions))
    })
  }
}
