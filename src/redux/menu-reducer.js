import { categories } from '../categories.js'
import { getData } from '../db.js'
const SET_MENU = 'SET_MENU'
let initialState = {}
const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU: {
      return {
        ...state,
        ...action.fullItem,
      }
    }
    default:
      return state
  }
}
const setMenu = (fullItem) => ({
  type: SET_MENU,
  fullItem,
})
export const getMenu = () => (dispatch) => {
  let obj = {
    ...categories,
  }
  Promise.all(
    Object.keys(obj).map(async (cat) => {
      await getData(cat).then((data) => {
        obj[cat] = data.docs.map((doc) => ({ ...doc.data() }))
      })
    })
  ).then(() => {
    dispatch(setMenu(obj))
  })
}
export default menuReducer
