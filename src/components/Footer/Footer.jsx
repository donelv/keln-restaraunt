import React from 'react'
import './Footer.css'
import logo from '../../assets/img/logo-big.svg'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <hr />
        <div className="sides-wrapper">
          <div className="footer__left-side">
            <img className="footer__logo" src={logo} alt="Кёльн" />
            <p className="footer__left-side_address">
              г. Нижневартовск, ул. Ленина, 17А
            </p>
            <p className="footer__left-side_phone">+7(3466) 49-18-49</p>
          </div>
          <div className="footer__right-side">
            <p>
              {' '}
              <b>График работы ресторана:</b> <br />
              <b>Пн, Вт, Ср, Вс</b> | 12:00 - 0:00 <br />
              <b>Чт, Пт, Сб</b> | 12:00 - 02:00
              <br />
            </p>

            <p>
              <b>График работы доставки:</b> <br />
              <b>Пн, Вт, Ср, Вс</b> | 12:00 - 23:00 <br />
              <b>Чт, Пт, Сб</b> | 12:00 - 01:00
            </p>
          </div>
        </div>
        <hr />
      </div>

      <div className="footer__copyright">
        <p>Copyright © 2022 Keln Restaraunt</p>
      </div>
    </footer>
  )
}
export default Footer
