import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootEpic, rootReducer } from './../logics'
import { Main, AppHeader } from './components'

const epicMiddleware = createEpicMiddleware(rootEpic)
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)))

class RootComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: 'tbs planet'
    }
  }
  render () {
    return (
      <Provider store={store}>
      {/* <Provider> */}
        <Router>
          <div>
            <div className='page'>
              <AppHeader />
              <Main />
              {/* <Footer /> */}
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default RootComponent;