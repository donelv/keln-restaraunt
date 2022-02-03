import React from 'react'
import { connect } from 'react-redux'
import {
  addItem,
  deleteItem,
  increaseItem,
  decreaseItem,
} from '../../redux/cart-reducer'
import Menu from './Menu'
const MenuContainer = (props) => {
  return (
    <Menu
      addItem={props.addItem}
      deleteItem={props.deleteItem}
      increaseItem={props.increaseItem}
      decreaseItem={props.decreaseItem}
      items={props.items}
    />
  )
}
let mapStateToProps = (state) => {
  return {
    items: state.cart.items,
  }
}
export default connect(mapStateToProps, {
  addItem,
  deleteItem,
  increaseItem,
  decreaseItem,
})(MenuContainer)
