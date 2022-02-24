import defaultPhoto from '../assets/img/food/leberhause.jpg'
const ADD_ITEM = 'ADD_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const INCREASE_ITEM = 'INCREASE_ITEM'
const DECREASE_ITEM = 'DECREASE_ITEM'
const COUNT_SUM_OF_THE_CART = 'COUNT_SUM_OF_THE_CART'
let initialState = {
  sum: 0,
  items: [
    {
      description:
        'семга, авокадо, струч. фасоль, черри, кедровый орех, листья салата, горчичный соус',
      id: 12,
      img: 'img/food/fishingen.jpg',
      name: 'Фишинген',
      price: 635,
      weight: 240,
      amount: 1,
    },
  ],
}
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_ITEM: {
      return {
        ...state,
        items: [
          ...state.items.map((it) => {
            if (it['id'] === action.itemId) {
              return { ...it, amount: it.amount + 1 }
            }
            return it
          }),
        ],
      }
    }
    case DECREASE_ITEM: {
      return {
        ...state,
        items: [
          ...state.items.map((it) => {
            if (it['id'] === action.itemId) {
              return { ...it, amount: it.amount - 1 }
            }
            return it
          }),
        ],
      }
    }
    case DELETE_ITEM: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.itemId), //state.items.slice(action.itemId),
      }
    }
    case ADD_ITEM: {
      return {
        ...state,
        items: [...state.items, { ...action.fullItem, amount: 1 }],
      }
    }
    case COUNT_SUM_OF_THE_CART: {
      let sum = 0
      for (var item of state.items) {
        sum += parseInt(item.price) * parseInt(item.amount)
      }
      return {
        ...state,
        sum,
      }
    }
    default:
      return state
  }
}

const deleteItemAC = (itemId) => ({
  type: DELETE_ITEM,
  itemId,
})
const addItemAC = (fullItem) => ({
  type: ADD_ITEM,
  fullItem,
})
const increaseItemAC = (itemId) => ({
  type: INCREASE_ITEM,
  itemId,
})
const decreaseItemAC = (itemId) => ({
  type: DECREASE_ITEM,
  itemId,
})
export const countSumOfTheCartAC = () => ({
  type: COUNT_SUM_OF_THE_CART,
})
export const decreaseItem = (itemId) => (dispatch) => {
  dispatch(decreaseItemAC(itemId))
  dispatch(countSumOfTheCartAC())
}
export const increaseItem = (itemId) => (dispatch) => {
  dispatch(increaseItemAC(itemId))
  dispatch(countSumOfTheCartAC())
}
export const deleteItem = (itemId) => (dispatch) => {
  dispatch(deleteItemAC(itemId))
  dispatch(countSumOfTheCartAC())
}
export const addItem = (fullItem) => (dispatch) => {
  dispatch(addItemAC(fullItem))
  dispatch(countSumOfTheCartAC())
}
export default cartReducer
