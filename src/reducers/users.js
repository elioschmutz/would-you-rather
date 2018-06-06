import {
  RECEIVE_USERS,
  ADD_USER,
  ADD_QUESTION_TO_USER,
  USER_ANSWERED_QUESTION
} from '../actions/users'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_USER:
      return {
        ...state,
        ...action.user
      }
    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat(action.question.id)
        }
      }
    case USER_ANSWERED_QUESTION:
      const { authedUser, question, answer } = action
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [question.id]: answer
          }
        }
      }
    default:
      return state
  }
}
