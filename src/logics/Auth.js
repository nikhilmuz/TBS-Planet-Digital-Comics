import { Observable } from 'rxjs/Observable'
import { ajax as staticAjax } from 'rxjs/observable/dom/ajax'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/of'
// import AppConfig from 'Config'
import { apiPattern, actionType, setCookies, removeCookies, apiCall, catchError } from './../common/utils'

Observable.ajax = staticAjax

const Auth = apiPattern('auth', 'tbs')

const LOGIN = Auth.actionType('login')
const LOGIN_SUCCESS = Auth.actionType('login_success')
const LOGIN_FAILURE = Auth.actionType('login_failure')

const loginSuccess = Auth.createAction(LOGIN_SUCCESS)

const INITAL_STATE = {
  data: {},
  loading: false,
  error: false,
  loggedIn: false
}
export function login (data) {
  return {
    type: LOGIN,
    payload: data
  }
}
export const loginReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        data: {},
        loading: true,
        error:  false,
        loggedIn: false
      }
    case LOGIN_SUCCESS:
    setCookies('permission', 'Auth_permission')
    setCookies('username', action.payload.first_name)
    setCookies('user', action.payload)

    return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
        loggedIn: true,
    }
    case LOGIN_FAILURE:
    removeCookies()
    return {
        ...state,
        data: {},
        loading: false,
        error: true,
        loggedIn: false
    }
    default:
    return state
  }
}

export const loginAction = action$ => action$
    .ofType(LOGIN)
    .mergeMap(action => Observable.ajax(apiCall('/Path', 'GET'))
        .map(response => loginSuccess(response))
        .catch(error => Observable.of(...catchError(LOGIN_FAILURE, error))))