import Rcookie from 'react-cookies'
import cookie from 'react-cookies'
import Observable from 'rxjs/Observable'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/of'

export const setCookies = (value, type) => {
    const domain = ''
    const expires = new Date()
    expires.setDate(new Date().getTime + (24 * 60 * 60 * 1000))
    document.cookie = `${type}=${value};, path=/, expires=${expires}, secure=${true}; domain=${domain}`
}

export const removeCookies = () => {
    const cookies = document.cookie.split(';')
    const domain = ''
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i]
        const equalPos = cookie.indexOf('=')
        const name = equalPos > -1 ? cookie.substr(0, equalPos) : cookie
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${domain}`
    }
}

export function checkAuth () {
    return cookie.load('permission') ? true : false
}
export function catchError (type, error) {
    return ([{ type, payload: [] }, { type: 'error', payload: error}])
}
export function apiPattern (name, app) {
    function actionType(type) {
        if (app) {
            return `${app}_${name}_${type}`
        } else {
            return `${name}_${type}`
        }
    }

    function createReducer (cases, defaultState = {}) {
        return function reducer (state = defaultState, action = {}) {
            if (state === undefined) return defaultState
            Object.keys(cases).forEach(caseName => {
                if(action.type === caseName) {
                    return cases[caseName](state, action)
                } else return null
            })
            return state
        }
    }

    function createAction(type) {
        return function actionCreator(payload) {
            const action = {
                type
            }
            if (action) action.payload = payload
            return action
        }
    }
    function createEpic(actionTrigger, actionOnSuccess, apiCall, funcs = []) {
        return function epic (actions$) {
            if (funcs.length > 0) {
                actions$
                .funcs.reduce((prev, curl) => prev.then(curl), typeof(actionTrigger))
                .mergeMap(action => Observable.ajax(apiCall(...apiCall))
                    .map(response => actionOnSuccess(response)
                    .catch(error => Observable.of(catchError(`${actionTrigger}_FAILURE`)))))
            }
        }
    }
    return {
        actionType,
        createAction,
        createEpic,
        createReducer,
    }
}
export const apiCall = (url, method, body, authReq = true) => {
    if (authReq) {
        return ({
            method,
            url,
            body,
            headers: {
                'Authourization': Rcookie.load('permission') ? `${Rcookie.load('permission')}` : '',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
    } else {
        return ({
            method,
            url,
            body,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' 
            }
        })
    }
}