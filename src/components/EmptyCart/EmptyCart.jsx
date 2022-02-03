import React from 'react'
import { Link } from 'react-router-dom'
import './EmptyCart.css'
const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <div className="empty-cart__p">В корзине пока пусто</div>
      <Link to={'/menu'} className="empty-cart__link">
        Перейти к меню
      </Link>
    </div>
  )
}
export default EmptyCart
