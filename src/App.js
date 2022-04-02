import './App.css'
import Cart from './components/Cart/Cart'
import { Route, Navigate, Routes } from 'react-router-dom'
import MenuContainer from './components/Menu/MenuContainer'
import Footer from './components/Footer/Footer'
import OrderPage from './components/OrderPage/OrderPage'
import React, { useEffect, useState } from 'react'
import { getMenu } from './redux/menu-reducer'
import { connect } from 'react-redux'
import TemplatePage from './components/TemplatePage/TemplatePage'
import Header from './components/Header/Header'
import MenuLoader from './components/MenuLoader/MenuLoader'
import MainPage from './components/MainPage/MainPage'
import DeliveryPage from './components/DeliveryPage/DeliveryPage'
const App = (props) => {
  let [initialized, setInitialized] = useState(false)
  useEffect(async () => {
    await props.getMenu()
    setInitialized(true)
  }, [])
  return (
    <>
      <Routes>
        <Route exact path={'/'} element={<Navigate to={'/main'} />} />
        <Route
          path={'main'}
          element={
            <>
              <Header whatPage="Заказ"></Header>
              <MainPage />
            </>
          }
        />
        <Route
          path={'menu'}
          element={
            <>
              <Header whatPage="Меню" />
              {initialized ? <MenuContainer /> : <MenuLoader />}
            </>
          }
        />
        <Route
          path={'delivery'}
          element={
            <>
              <Header whatPage="Доставка" />
              {<DeliveryPage />}
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
          path={'cart/order/success'}
          element={
            <>
              <Header whatPage="Заказ"></Header>
              <TemplatePage
                title="Заказ подтвержден"
                p={`Ваш заказ отправлен в ресторан. В течение 15 минут с Вами свяжется администратор`}
                linkText="Перейти к меню"
                link="/menu"
              />
            </>
          }
        />
        <Route
          path={'*'}
          element={
            <>
              <Header whatPage="404"></Header>
              <TemplatePage
                title="Ошибка"
                p="Страница не найдена"
                linkText="Перейти на главную"
                link="/main"
              />
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
