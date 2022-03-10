import './SuccessPage.css'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
const SuccessPage = () => {
  return (
    <div className="main">
      <div className="success-page">
        <div className="success-page__title">Заказ подтвержден</div>
        <div className="success-page__p">
          Ваш заказ отправлен в ресторан и скоро будет доставлен
        </div>
        <Link to={'/menu'} className="success-page__link">
          Перейти к меню
        </Link>
      </div>
    </div>
  )
}
export default SuccessPage
