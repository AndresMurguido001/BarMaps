import {SET_CURRENT_USER, CLEAR_PROFILE } from '../actions/types.js'
import isEmpty from '../validation/is-empty'

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    case CLEAR_PROFILE:
    return {
      ...state,
      isAuthenticated: false,
      user: {}
    }

    default:
      return state
  }
}
