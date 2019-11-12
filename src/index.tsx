import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import store from './redux'

const root: HTMLElement = document.getElementById('root')

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  root,
)
