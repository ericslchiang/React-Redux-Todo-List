import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import ListContainer from './container/ListContainer'
import AddTodo from './container/AddTodo'
import reducers from './reducer/reducers'

const store = createStore(reducers)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)