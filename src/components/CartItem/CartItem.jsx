import React from 'react'
import defaultPhoto from '../../assets/img/food/leberhause.jpg'
import decreaseItemIcon from '../../assets/img/delete.svg'
import increaseItemIcon from '../../assets/img/add.svg'
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
    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
      <div className="main-cart-item">
        <div className="main-cart-item-image">
          <img src={defaultPhoto} alt={props.name} />
        </div>

        <div className="main-cart-item-name">
          <div>{props.name}</div>
          <p>{props.description}</p>
        </div>
        <div className="main-cart-item-wrap">
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

          <div className="main-cart-item-wrap-price">
            <span>{props.price}₽</span>
          </div>
        </div>
        <button className="main-cart-item-delete" onClick={handleDelete}>
          <img src={deleteItemIcon} alt="Закрыть" />
        </button>
      </div>
    </div>
  )
}
export default CartItem
