import './App.css'
import Cart from './components/Cart/Cart'
import { Route, Navigate, Routes } from 'react-router-dom'
import MenuContainer from './components/Menu/MenuContainer'
import Footer from './components/Footer/Footer'
import OrderPage from './components/OrderPage/OrderPage'
import React, { useEffect } from 'react'
import { getMenu } from './redux/menu-reducer'
import { connect } from 'react-redux'
import SuccessPage from './components/SuccessPage/SuccessPage'
import Header from './components/Header/Header'
const App = (props) => {
  useEffect(() => {
    props.getMenu()
  }, [])
  return (
    <>
      <Routes>
        <Route exact path={'/'} element={<Navigate to={'/menu'} />} />
        <Route
          path={'menu'}
          element={
            <>
              <Header whatPage="Меню" />
              <MenuContainer />
            </>
          }
        />
        <Route
          path={'cart'}
          element={
            <>
              <Header whatPage="Корзина" />
              <Cart />
            </>
          }
        />
        <Route
          path={'cart/order'}
          element={
            <>
              <Header whatPage="Заказ" />{' '}
              {props.items.length > 0 ? (
                <OrderPage />
              ) : (
                <Navigate to={'/cart'} />
              )}
            </>
          }
        />
        <Route
          path={'cart/success'}
          element={
            <>
              <Header whatPage="Заказ"></Header>
              <SuccessPage />
            </>
          }
        />
        <Route
          path={'*'}
          element={
            <>
              <Header whatPage="404"></Header>
              <div>404 undefined</div>
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  )
}
const mapStateToProps = (state) => ({ items: state.cart.items })
export default connect(mapStateToProps, {
  getMenu,
})(App)
