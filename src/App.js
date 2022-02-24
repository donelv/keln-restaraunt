import './App.css'
import Cart from './components/Cart/Cart'
import { Route, Navigate, Routes } from 'react-router-dom'
import MenuContainer from './components/Menu/MenuContainer'
import Footer from './components/Footer/Footer'
import OrderPage from './components/OrderPage/OrderPage'
import React, { useEffect } from 'react'
import { getMenu } from './redux/menu-reducer'
import { connect } from 'react-redux'
const App = (props) => {
  useEffect(() => {
    props.getMenu()
  }, [])
  return (
    <>
      <Routes>
        <Route exact path={'/'} element={<Navigate to={'/menu'} />} />
        <Route path={'menu'} element={<MenuContainer />} />
        <Route path={'cart'} element={<Cart />} />
        <Route path={'cart/order'} element={<OrderPage />} />
        <Route path={'*'} element={<div>404 undefined</div>} />
      </Routes>
      <Footer />
    </>
  )
}
const mapStateToProps = (state) => ({})
export default connect(mapStateToProps, {
  getMenu,
})(App)
