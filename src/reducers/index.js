import { combineReducers } from 'redux'
import questions from './questions'
import users from './users'
import authedUser from './authedUser'
import currentCategory from './currentCategory'
import shared from './shared'
import { loadingBarReducer } from 'react-redux-loading'


export default combineReducers({
  questions,
  users,
  shared,
  authedUser,
  currentCategory,
  loadingBar: loadingBarReducer
})
