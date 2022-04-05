import { useEffect } from 'react'
import './DeliveryPage.css'
const DeliveryPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
  }, [])
  return (
    <div className="main">
      <div className="delivery-page">
        <div className="delivery-page__section">График работы</div>
        <p className="delivery-page__time">
          <b>Пн, Вт, Ср, Вс</b> | 12:00 - 23:00 <br />
          <b>Чт, Пт, Сб</b> | 12:00 - 01:00
          <br />
        </p>
        <div className="delivery-page__section">По городу</div>
        <div className="delivery-page__wrapper">
          <div className="delivery-page__card">
            <p className="card__title">Стоимость</p>
            <p className="card__info">100 рублей*</p>
            <p className="card__dop-info">*бесплатно от суммы заказа 1000₽ </p>
          </div>

          <div className="delivery-page__card">
            <p className="card__title">Время</p>
            <p className="card__info">до 60 минут</p>
          </div>
        </div>
        <div className="delivery-page__section">За пределами города</div>
        <div className="delivery-page__wrapper">
          <div className="delivery-page__card">
            <p className="card__title">Старый Вартовск</p>
            <p className="card__info">200 рублей*</p>
          </div>
          <div className="delivery-page__card">
            <p className="card__title">Дивный</p>
            <p className="card__info">200 рублей*</p>
          </div>
          <div className="delivery-page__card">
            <p className="card__title">Излучинск</p>
            <p className="card__info">300 рублей*</p>
          </div>
          <div className="delivery-page__card">
            <p className="card__title">Мегион</p>
            <p className="card__info">500 рублей*</p>
          </div>
          <div className="delivery-page__card">
            <p className="card__title">Время</p>
            <p className="card__info">от 60 минут</p>
          </div>
          <p>
            *Примечание
            <br />
            Стоимость доставки может измениться. <br />
            Администратор уведомит Вас о изменении цены.
          </p>
        </div>

        {/* <p>
          <b>График работы доставки:</b>
          <br /> Пн, Вт, Ср, Вс | 12:00 - 23:00
          <br /> Чт, Пт, Сб | 12:00 - 01:00
        </p>
        <p>
          Стоимость доставки по городу - 100 рублей
          <br /> От суммы заказа 1000 рублей доставка по городу -
          <b> бесплатная</b>.
          <br />
          Стоимость доставки в Старый Вартовск - 200 рублей <br />
          Стоимость доставки в Дивный - 200 рублей <br />
          Стоимость доставки в Излучинск - 300 рублей <br />
          Стоимость доставки в Мегион - 500 рублей
        </p> */}
      </div>
    </div>
  )
}
export default DeliveryPage
