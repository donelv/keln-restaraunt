import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import cartReducer from './cart-reducer'
import menuReducer from './menu-reducer'
import getPersistMiddleware from 'redux-persist-middleware'
import { getConfiguredCache } from 'money-clip'
export const cache = getConfiguredCache()
export const actionMap = {
  ADD_ITEM: ['cart'],
  INCREASE_ITEM: ['cart'],
  DECREASE_ITEM: ['cart'],
  DELETE_ITEM: ['cart'],
}
export const persistMiddleware = getPersistMiddleware({
  cacheFn: cache.set, // specifies we would like to set the cache
  logger: console.info, // adds helpful console logging
  actionMap, // contains the Redux action and key we specified
})
export const reducer = combineReducers({
  cart: cartReducer,
  menu: menuReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = null
cache.getAll().then((data) => {
  store = createStore(
    reducer,
    data,
    composeEnhancers(applyMiddleware(thunkMiddleware, persistMiddleware))
  )
})
// let store = createStore(
//   reducer,
//   data,
//   composeEnhancers(applyMiddleware(thunkMiddleware, persistMiddleware))
// )
// replaceState()
window.store = store
console.log('Доступен store через window')
export default store
