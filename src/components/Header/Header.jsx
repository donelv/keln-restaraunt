import React, { useState, useEffect } from 'react'
import './Header.css'
import logo from '../../assets/img/logo-big.svg'
import logo_small from '../../assets/img/logo-small.svg'
import cart from '../../assets/img/cart.svg'
import search from '../../assets/img/search.svg'
import liked from '../../assets/img/liked.svg'
import cancel from '../../assets/img/cancel.svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { countSumOfTheCartAC } from '../../redux/cart-reducer'
const Header = (props) => {
  const [searchShow, setSearchShow] = useState(false)
  useEffect(() => {
    props.countSumOfTheCartAC()
  }, [])
  return (
    <header className="header">
      <div className="header__wrap">
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
        <div className="header__page">{props.whatPage}</div>
        <div className="header__navbar">
          <Link to="/cart">
            <div className="header__cart">
              <p>{props.sum > 0 && props.sum + '₽'}</p>
              <img src={cart} alt="Корзина" />
            </div>
          </Link>
          {/*<div className="header__liked">
            <img src={liked} alt="Сохранённое" />
          </div>
          <div className="header__search">
            <img src={search} alt="Поиск" />
          </div>/*}
          
          {/* {<ul className="search">
            {!searchShow && (
              <li className="cart">
                <Link to="/cart">
                  <p className="header-nav-li-price">
                    {props.sum > 0 && props.sum + '₽'}
                  </p>
                  <button className="search-form-button">
                    <img src={cart} alt="Корзина" />
                  </button>
                </Link>
              </li>
            )}

            {!searchShow && (
              <li className="liked">
                <button className="search-form-button">
                  <img src={liked} alt="Сохранённое" />
                </button>
              </li>
            )}
            {searchShow && (
              <li>
                <input
                  className="search-form-input"
                  type="text"
                  name="search"
                  placeholder="Найти"
                  autoComplete="off"
                />
                <button class="search-form-cancel">
                  <img src={cancel} alt="Закрыть" />
                </button>
              </li>
            )}
            <li>
              <button
                className="search-form-button"
                onClick={() => setSearchShow(!searchShow)}
                onBlur={() => setSearchShow(!searchShow)}
              >
                <img src={search} alt="Поиск" />
              </button>
            </li>
          </ul>} */}
        </div>
      </div>
    </header>
  )
}
let mapStateToProps = (state) => {
  return {
    sum: state.cart.sum,
  }
}
export default connect(mapStateToProps, { countSumOfTheCartAC })(Header)
