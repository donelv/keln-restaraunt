import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import cartReducer from './cart-reducer'
import menuReducer from './menu-reducer'
let reducer = combineReducers({ cart: cartReducer, menu: menuReducer })
let store = createStore(reducer, applyMiddleware(thunkMiddleware))
window.store = store
console.log('Доступен store через window')
export default store
