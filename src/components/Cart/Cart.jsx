import React, { useEffect } from 'react'
import './Cart.css'
import CartItemContainer from '../CartItem/CartItemContainer'
import { connect } from 'react-redux'
import EmptyCart from '../EmptyCart/EmptyCart'
import { Link, useNavigate } from 'react-router-dom'
const Cart = (props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
  }, [])
  let navigate = useNavigate()
  return (
    <div className="main">
      <div className="main-cart">
        {props.sum === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <CartItemContainer />
            <button
              className="main-cart-order_button"
              onClick={() => navigate('/cart/order')}
            >
              Оформление заказа
            </button>
          </>
        )}
      </div>
    </div>
  )
}
let mapStateToProps = (state) => {
  return {
    sum: state.cart.sum,
  }
}
export default connect(mapStateToProps, {})(Cart)
