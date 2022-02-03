import React from 'react'
import CartItem from './CartItem'
import { connect } from 'react-redux'
import {
  increaseItem,
  decreaseItem,
  deleteItem,
} from '../../redux/cart-reducer'
const CartItemContainer = (props) => {
  return props.items.map((ci, index) => {
    return (
      <CartItem
        key={`cartitem_${index}`}
        id={ci.id}
        name={ci.name}
        description={ci.description}
        amount={ci.amount}
        price={ci.price}
        increaseItem={props.increaseItem}
        decreaseItem={props.decreaseItem}
        deleteItem={props.deleteItem}
      />
    )
  })
}
let mapStateToProps = (state) => {
  return {
    items: state.cart.items,
  }
}
export default connect(mapStateToProps, {
  increaseItem,
  decreaseItem,
  deleteItem,
})(CartItemContainer)
