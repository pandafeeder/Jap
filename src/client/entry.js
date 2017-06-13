import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import  {
  BrowserRouter as Router,  
} from 'react-router-dom'
import { configStore } from '../store'

const store = configStore(window.__PRELOADED_STATE__)
delete window.__PRELOADED_STATE__

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  getElementById('app')
)