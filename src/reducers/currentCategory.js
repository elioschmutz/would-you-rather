import { SET_CURRENT_CATEGORY } from '../actions/currentCategory'

export default function currentCategory(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        [action.userid]: action.category
      }
    default:
      return state
  }
}
