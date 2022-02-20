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
      cartItems={props.cartItems}
      menuItems={props.menuItems}
    />
  )
}
let mapStateToProps = (state) => {
  return {
    cartItems: state.cart.items,
    menuItems: state.menu,
  }
}
export default connect(mapStateToProps, {
  addItem,
  deleteItem,
  increaseItem,
  decreaseItem,
})(MenuContainer)
