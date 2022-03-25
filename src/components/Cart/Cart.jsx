import React, { useEffect } from 'react'
import './Cart.css'
import Header from '../Header/Header'
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
            {/* <div className="main-cart__button-wrapper">
              <div className="main-cart-sum">
                <span>Итогo: {props.sum}₽</span>
              </div>
              <button className="main-cart-order_button">
                <Link to="/cart/order">Оформление заказа</Link>
              </button>
            </div> */}
          </>
        )}
      </div>
    </div>
  )
}
// const Cart = (props) => {
//   return (
//     <div>
//       <Header whatPage={'Корзина'}></Header>
//       <main className="main-cart">
//         <div className="container">
//           {props.sum === 0 ? (
//             <EmptyCart />
//           ) : (
//             <div className="row">
//               <CartItemContainer />
//               <div className="col-xl-5 offset-xl-2 col-lg-6 offset-lg-1 col-6">
//                 <div className="main-cart-sum">
//                   <span>Итогo: {props.sum}₽</span>
//                 </div>
//               </div>
//               <div className="col-xl-3 col-lg-4 col-6">
//                 <button className="main-cart-order_button">
//                   <Link to="/cart/order">Оформление заказа</Link>
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   )
// }
let mapStateToProps = (state) => {
  return {
    sum: state.cart.sum,
  }
}
export default connect(mapStateToProps, {})(Cart)
