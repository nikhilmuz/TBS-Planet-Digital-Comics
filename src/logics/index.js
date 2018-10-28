import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'

import { login, loginAction, loginReducer } from './Auth'

export const rootReducer = combineReducers({
  // reducers
  login: loginReducer
}
)
export const rootEpic = combineEpics(
  //actions / epics
  loginAction
)
export {
  login
}