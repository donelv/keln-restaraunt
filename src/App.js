import './App.css'
import Menu from './components/Menu/Menu'
import Cart from './components/Cart/Cart'
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import MenuContainer from './components/Menu/MenuContainer'
import Footer from './components/Footer/Footer'
import OrderPage from './components/OrderPage/OrderPage'
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route exact path={'/'} element={<Navigate to={'/menu'} />} />
          <Route path={'menu'} element={<MenuContainer />} />
          <Route path={'cart'} element={<Cart />} />
          <Route path={'cart/order'} element={<OrderPage />} />
          <Route path={'*'} element={<div>404 undefined</div>} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default App
