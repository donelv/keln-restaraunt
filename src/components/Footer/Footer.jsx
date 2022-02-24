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
            <b>График работы:</b> <br />
            ПН, ВТ, СР, ЧТ 9:00 - 21:00 <br />
            ПТ 10:00 - 19:00 <br />
            СБ 9:00 - 19:00 <br />
            ВС 10:00 - 17:00
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
