import React from 'react'
import './Foodcard.css'
import minus from '../../assets/img/minus.svg'
import plus from '../../assets/img/plus.svg'
import defaultPhoto from '../../assets/img/food/leberhause.jpg'
const Foodcard = (props) => {
  const handleClick =
    (plusOrMinus = true) =>
    () => {
      plusOrMinus
        ? props.increaseItem(props.obj.id)
        : props.decreaseItem(props.obj.id)
    }
  return (
    <div className="foodcards-item">
      <div className="foodcards-item-top">
        <img src={props.obj.img} alt={props.obj.name} />
      </div>
      <div className="foodcards-item-bottom">
        <div className="foodcards-item-bottom-name">{props.obj.name}</div>
        <div className="foodcards-item-bottom-description">
          <p>{props.obj.description || props.obj.name}</p>
        </div>
        <div className="foodcards-item-bottom-info">
          <span className="foodcards-item-bottom-info-price">
            {props.obj.price}₽
          </span>
          <div className="foodcards-item-bottom-info-dot"></div>
          <span className="foodcards-item-bottom-info-weight">
            {props.obj.weight}
          </span>
        </div>
        <div className="foodcards-item-bottom-container">
          {props.amount <= 0 ? (
            <button
              className="foodcards-item-bottom-container-button-add-to-cart"
              onClick={() => props.addItem(props.obj)}
            >
              Добавить в корзину
            </button>
          ) : (
            <div>
              <button
                className="foodcards-item-bottom-container-button-delete"
                onClick={
                  props.amount == 1
                    ? () => {
                        props.deleteItem(props.obj.id)
                      }
                    : handleClick(false)
                }
              >
                <img src={minus} />
              </button>
              <div className="foodcards-item-bottom-container-amount">
                <span>{props.amount}</span>
              </div>
              <button
                className="foodcards-item-bottom-container-button-add"
                onClick={handleClick()}
              >
                <img src={plus} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Foodcard
