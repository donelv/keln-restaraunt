import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import cartReducer from './cart-reducer'
let reducer = combineReducers({ cart: cartReducer })
let store = createStore(reducer, applyMiddleware(thunkMiddleware))
window.store = store
console.log('Доступен store через window')
export default store
