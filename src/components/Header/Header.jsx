import React, { useState, useEffect } from 'react'
import './Header.css'
import logo from '../../assets/img/logo-big.svg'
import logo_small from '../../assets/img/logo-small.svg'
import cart from '../../assets/img/cart.svg'
import search from '../../assets/img/search.svg'
import liked from '../../assets/img/liked.svg'
import cancel from '../../assets/img/cancel.svg'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { countSumOfTheCartAC } from '../../redux/cart-reducer'
import ResponsiveNav from '../ResponsiveNav/ResponsiveNav'
const Header = (props) => {
  const [navActive, setNavActive] = useState(false)
  useEffect(() => {
    props.countSumOfTheCartAC()
  }, [])
  const handleActive = () => {
    const navList = document.querySelectorAll('.mynavbar')
    navActive
      ? navList.forEach((item) => {
          item.classList.remove('mob_nav__is-active')
        })
      : navList.forEach((item) => {
          item.classList.add('mob_nav__is-active')
        })
    setNavActive(!navActive)
  }
  return (
    <>
      <header className="header">
        <div className="header__wrap">
          <nav className="header-navbar">
            <NavLink to={'/main'} className="header__link">
              Главная
            </NavLink>
            <NavLink to={'/menu'} className="header__link">
              Меню
            </NavLink>
            <NavLink to={'/delivery'} className="header__link">
              Доставка
            </NavLink>
          </nav>
          <div className="mobile-navbar">
            <button
              className={
                navActive ? 'header_hamburger is-active' : 'header_hamburger'
              }
              onClick={handleActive}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="Кёльн" />
            </Link>
          </div>

          <div className="header__logo-small">
            <Link to="/">
              <img src={logo_small} alt="Кёльн" />
            </Link>
          </div>

          <div className="header__cart-wrapper">
            <div className="header__cart">
              <Link to="/cart">
                <p>{props.sum > 0 && props.sum + '₽'}</p>
                <img src={cart} alt="Корзина" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <ResponsiveNav setNavActive={handleActive} navActive={navActive} />
    </>
  )
}
let mapStateToProps = (state) => {
  return {
    sum: state.cart.sum,
  }
}
export default connect(mapStateToProps, { countSumOfTheCartAC })(Header)
