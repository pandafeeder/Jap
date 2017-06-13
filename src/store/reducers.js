import { combineReducers } from 'redux';
import * as actions from './actions';

export const charsIdListReducer = (state=[], action) => {
  switch (action.type) {
    case actions.FETCH_OK:
      return [...state, ...action.payload.result]
    default:
      return state
  }
}

export const charsReducer = (state={}, action) => {
  switch (action.type) {
    case actions.FETCH_OK:
      return {...state, ...action.payload.entities}
    default:
      return state
  }
}

export const fetchStatusReducer = (state={fetchStatus: 'notyet'}, action) => {
  switch (action.type) {
    case actions.FETCH_OK:
    case actions.FETCH_START:
      return {...state, ...action.status}
    case actions.FETCH_ERROR:
      return {...state, ...action.status, ...action.error}
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  chars: charsReducer,
  charsIdList: charsIdListReducer,
  fetchStatus: fetchStatusReducer
})
