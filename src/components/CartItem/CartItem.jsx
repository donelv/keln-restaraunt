import React from 'react'
import defaultPhoto from '../../assets/img/food/leberhause.jpg'
import decreaseItemIcon from '../../assets/img/minus.svg'
import increaseItemIcon from '../../assets/img/plus.svg'
import deleteItemIcon from '../../assets/img/cancel.svg'
const CartItem = (props) => {
  const handleClick = (increaseOrDecrease) => {
    increaseOrDecrease
      ? props.increaseItem(props.id)
      : props.decreaseItem(props.id)
  }
  const handleDelete = () => {
    props.deleteItem(props.id)
  }
  return (
    <div className="main-cart-item">
      <div className="main-cart-item__image">
        <img src={defaultPhoto} alt={props.name} />
      </div>

      <div className="main-cart-item__name">
        <div>{props.name}</div>
        <p>{props.description}</p>
      </div>
      <div className="main-cart-item__ap-grid">
        <div className="main-cart-item-wrap-price">
          <span>{props.price}₽</span>
        </div>
        <div className="main-cart-item-wrap-amount">
          {props.amount <= 0 ? (
            handleDelete()
          ) : (
            <div>
              <button
                className="main-cart-item-wrap-amount-button"
                onClick={() => handleClick(false)}
              >
                <img src={decreaseItemIcon} />
              </button>
              <span>{props.amount}</span>
              <button
                className="main-cart-item-wrap-amount-button"
                onClick={() => handleClick(true)}
              >
                <img src={increaseItemIcon} />
              </button>
            </div>
          )}
        </div>
      </div>
      {/* <button className="main-cart-item-delete" onClick={handleDelete}>
        <img src={deleteItemIcon} alt="Закрыть" />
      </button> */}
    </div>
  )
}
export default CartItem
