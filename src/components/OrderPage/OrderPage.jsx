import React from 'react'
import './OrderPage.css'
const OrderPage = () => {
  return (
    <form className="form">
      <div>
        <input
          className="form__input"
          placeholder="Имя"
          spellcheck="false"
        ></input>
      </div>
      <div>
        <input
          className="form__input"
          placeholder="Телефон"
          spellcheck="false"
        ></input>
      </div>
      <div>
        <input
          className="form__input"
          placeholder="Адрес"
          spellcheck="false"
        ></input>
      </div>
      <div className="form__wrapper-input">
        <div>
          <input
            className="form__input form__input-small"
            placeholder="Подъезд"
            spellcheck="false"
          ></input>
        </div>
        <div>
          <input
            className="form__input form__input-small"
            placeholder="Домофон"
            spellcheck="false"
          ></input>
        </div>
        <div>
          <input
            className="form__input form__input-small"
            placeholder="Кв./Офис"
            spellcheck="false"
          ></input>
        </div>
        <div>
          <input
            className="form__input form__input-small"
            placeholder="Этаж"
            spellcheck="false"
          ></input>
        </div>
      </div>

      <div>
        <input
          className="form__input"
          placeholder="Комментарий"
          spellcheck="false"
        ></input>
      </div>
      <div>
        <button className="form__button">Подтвердить заказ</button>
      </div>
    </form>
  )
}

export default OrderPage
