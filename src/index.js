import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './bootstrap.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import cartReducer from './redux/cart-reducer'
import menuReducer from './redux/menu-reducer'
import getPersistMiddleware from 'redux-persist-middleware'
import { getConfiguredCache } from 'money-clip'
const cache = getConfiguredCache()
const actionMap = {
  ADD_ITEM: ['cart'],
  INCREASE_ITEM: ['cart'],
  DECREASE_ITEM: ['cart'],
  DELETE_ITEM: ['cart'],
  CLEAR_CART: ['cart'],
}
const persistMiddleware = getPersistMiddleware({
  cacheFn: cache.set, // specifies we would like to set the cache
  // logger: console.info, // adds helpful console logging
  actionMap, // contains the Redux action and key we specified
})
const reducer = combineReducers({
  cart: cartReducer,
  menu: menuReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
cache.getAll().then((data) => {
  const store = createStore(
    reducer,
    data,
    composeEnhancers(applyMiddleware(thunkMiddleware, persistMiddleware))
  )
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
