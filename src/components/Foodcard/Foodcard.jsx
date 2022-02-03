import React from 'react'
import './Foodcard.css'
const Foodcard = (props) => {
  const handleClick =
    (plusOrMinus = true) =>
    () => {
      plusOrMinus
        ? props.increaseItem(props.obj.id)
        : props.decreaseItem(props.obj.id)
    }
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <div className="foodcards-item">
        <div className="foodcards-item-top">
          <img src={props.img} alt={props.obj.name} />
        </div>
        <div className="foodcards-item-bottom">
          <h3 className="foodcards-item-bottom-name">{props.obj.name}</h3>
          <div className="foodcards-item-bottom-description">
            <p>{props.obj.description}</p>
          </div>
          <div className="foodcards-item-bottom-info">
            <span className="foodcards-item-bottom-info-price">
              {props.obj.price}₽
            </span>
            <div className="foodcards-item-bottom-info-dot"></div>
            <span className="foodcards-item-bottom-info-weight">
              {props.obj.weight}г
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
                          console.log('should delete')
                          props.deleteItem(props.obj.id)
                        }
                      : handleClick(false)
                  }
                >
                  –
                </button>
                <div className="foodcards-item-bottom-container-amount">
                  <span>{props.amount}</span>
                </div>
                <button
                  className="foodcards-item-bottom-container-button-add"
                  onClick={handleClick()}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Foodcard
