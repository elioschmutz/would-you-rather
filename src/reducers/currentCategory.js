import { SET_CURRENT_CATEGORY } from '../actions/currentCategory'
import { categories } from '../config'

export default function currentCategory(state = categories.unanswered, action) {
  switch (action.type) {
    case SET_CURRENT_CATEGORY:
      return action.category
    default:
      return state
  }
}
