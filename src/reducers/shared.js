import { combineReducers } from 'redux'
import { INIT_DATA_RECEIVED } from '../actions/shared'

function initDataReceived(state = false, action) {
  switch (action.type) {
    case INIT_DATA_RECEIVED:
      return true
    default:
      return state
  }
}

const shared = combineReducers({
  initDataReceived
})

export default shared
