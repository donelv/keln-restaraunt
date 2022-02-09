import React from 'react'
import './OrderPage.css'
const OrderPage = () => {
  return (
    <form className="form">
      <div>
        <input className="form__input" placeholder="Имя"></input>
      </div>
      <div>
        <input className="form__input" placeholder="Телефон"></input>
      </div>
      <div>
        <input className="form__input" placeholder="Адрес"></input>
      </div>
      <div className="form__wrapper-input">
        <div>
          <input
            className="form__input form__input-small"
            placeholder="Подъезд"
          ></input>
        </div>
        <div>
          <input
            className="form__input form__input-small"
            placeholder="Домофон"
          ></input>
        </div>
        <div>
          <input
            className="form__input form__input-small"
            placeholder="Кв./Офис"
          ></input>
        </div>
        <div>
          <input
            className="form__input form__input-small"
            placeholder="Этаж"
          ></input>
        </div>
      </div>

      <div>
        <input className="form__input" placeholder="Комментарий"></input>
      </div>
      <div>
        <button className="form__button">Подтвердить заказ</button>
      </div>
    </form>
  )
}

export default OrderPage
