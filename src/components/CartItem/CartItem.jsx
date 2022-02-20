import React from 'react'
import './CartItem.css'
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
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={defaultPhoto} alt={props.name} />
      </div>
      <div className="cart-item__description">
        <div className="cart-item__name-and-price">
          <div>{props.name}</div>
          <span>{props.price}₽</span>
        </div>

        <p>{props.description}</p>
      </div>
      <div className="cart-item__buttons">
        {props.amount <= 0 ? (
          handleDelete()
        ) : (
          <>
            <button
              className="cart-item__minus"
              onClick={() => handleClick(false)}
            >
              <img src={decreaseItemIcon} alt="Уменьшить" />
            </button>
            <div className="cart-item__amount">
              <span>{props.amount}</span>
            </div>
            <button
              className="cart-item__plus"
              onClick={() => handleClick(true)}
            >
              <img src={increaseItemIcon} alt="Увеличить" />
            </button>
          </>
        )}
      </div>
    </div>
    // <div className="main-cart-item">
    //   <div className="main-cart-item__image">
    //     <img src={defaultPhoto} alt={props.name} />
    //   </div>

    //   <div className="main-cart-item__name">
    //     <div>{props.name}</div>
    //     <div className="main-cart-item__price">
    //       <span>{props.price}₽</span>
    //     </div>
    //     <p>{props.description}</p>
    //   </div>
    //   <div className="main-cart-item__ap-grid">

    //     <div className="main-cart-item-wrap-amount">
    //       {props.amount <= 0 ? (
    //         handleDelete()
    //       ) : (
    //         <div>
    //           <button
    //             className="main-cart-item-wrap-amount-button"
    //             onClick={() => handleClick(false)}
    //           >
    //             <img src={decreaseItemIcon} />
    //           </button>
    //           <span>{props.amount}</span>
    //           <button
    //             className="main-cart-item-wrap-amount-button"
    //             onClick={() => handleClick(true)}
    //           >
    //             <img src={increaseItemIcon} />
    //           </button>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    //   {/* <button className="main-cart-item-delete" onClick={handleDelete}>
    //     <img src={deleteItemIcon} alt="Закрыть" />
    //   </button> */}
    // </div>
  )
}
export default CartItem
