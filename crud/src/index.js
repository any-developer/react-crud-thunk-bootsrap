import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
import { rootReducer } from './redux/rootReducer'
import thunk from 'redux-thunk'


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
