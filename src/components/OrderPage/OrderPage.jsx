import React from 'react'
import './OrderPage.css'
const OrderPage = () => {
  return (
    <form className="form">
      <div>
        <input className="form__input"></input>
      </div>
      <div>
        <input className="form__input"></input>
      </div>
      <div>
        <input className="form__input"></input>
      </div>
      <div className="form__wrapper-input">
        <div>
          <input className="form__input form__input-small"></input>
        </div>
        <div>
          <input className="form__input form__input-small"></input>
        </div>
        <div>
          <input className="form__input form__input-small"></input>
        </div>
        <div>
          <input className="form__input form__input-small"></input>
        </div>
      </div>

      <div>
        <input className="form__input"></input>
      </div>
      <div>
        <button className="form__button">Подтвердить заказ</button>
      </div>
    </form>
  )
}

export default OrderPage
