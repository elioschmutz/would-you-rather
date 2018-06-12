import { combineReducers } from 'redux'
import questions from './questions'
import users from './users'
import authedUser from './authedUser'
import currentCategory from './currentCategory'
import shared from './shared'
import { loadingBarReducer } from 'react-redux-loading'
import { RESET_STATE } from '../actions/shared'

const appReducer = combineReducers({
  questions,
  users,
  shared,
  authedUser,
  currentCategory,
  loadingBar: loadingBarReducer
})

// https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store/35641992#35641992
const rootReducer = (state, action) => {
  return appReducer(action.type === RESET_STATE ? undefined : state, action)
}

export default rootReducer
