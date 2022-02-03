import React, { useState, useEffect } from 'react'
import './Header.css'
import logo from '../../assets/img/logo-big.svg'
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
      <div className="header-wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-2 col-4 offset-0">
              <Link to="/">
                <div className="header-logo">
                  <img src={logo} alt="Кёльн" />
                </div>
              </Link>
            </div>
            <div className="col-md-2 offset-md-3 col-4 offset-0">
              <h1 className="header-page">{props.whatPage}</h1>
            </div>
            <div className="col-md-3 offset-md-2 col-4 offset-0">
              <ul className="search">
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
              </ul>
            </div>
          </div>
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
