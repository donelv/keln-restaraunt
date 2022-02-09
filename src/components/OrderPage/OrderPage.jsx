import React from 'react'
import './OrderPage.css'
const OrderPage = () => {
  return (
    <div className="divka">
      <form className="form">
        <div className="form__group">
          <input className="form__input" spellCheck="false" required></input>
          <label className="form__label">Имя</label>
        </div>
        <div className="form__group">
          <input
            className="form__input"
            spellCheck="false"
            required
            type="tel"
            pattern="+7([0-9]{3}) [0-9]{3}-[0-9]{2}-[0-9]{2}"
          ></input>
          <label className="form__label">Телефон</label>
        </div>
        <div className="form__group">
          <input className="form__input" spellCheck="false" required></input>
          <label className="form__label">Адрес</label>
        </div>
        <div className="form__wrapper-input">
          <div className="form__group">
            <input
              className="form__input form__input-small"
              spellCheck="false"
              required
            ></input>
            <label className="form__label">Подъезд</label>
          </div>
          <div className="form__group">
            <input
              className="form__input form__input-small"
              spellCheck="false"
              required
            ></input>
            <label className="form__label">Домофон</label>
          </div>
          <div className="form__group">
            <input
              className="form__input form__input-small"
              spellCheck="false"
              required
            ></input>
            <label className="form__label">Кв./Офис</label>
          </div>
          <div className="form__group">
            <input
              className="form__input form__input-small"
              spellCheck="false"
              required
            ></input>
            <label className="form__label">Этаж</label>
          </div>
        </div>

        <div className="form__group">
          <input className="form__input" spellCheck="false" required></input>
          <label className="form__label">Комментарий</label>
        </div>
        <div>
          <button className="form__button">Подтвердить заказ</button>
        </div>
      </form>
    </div>
  )
}

export default OrderPage
