import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }
    case ANSWER_QUESTION:
      const { question, answer, authedUser } = action
      return {
        ...state,
        [question.id]: {
          ...state[question.id],
          [action.answer]: {
            ...state[question.id][answer],
            votes: state[question.id][answer].votes.concat([authedUser])
          }
        }
      }
    default:
      return state
  }
}
