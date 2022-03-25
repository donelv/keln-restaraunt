import './Modal.css'
import { useNavigate } from 'react-router-dom'

const Modal = (props) => {
  return (
    <div className="modalBackground" onClick={() => props.closeModal(false)}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="modal__title">Произошла ошибка</div>
        <div className="modal__body">
          <p>Доставка временно недоступна</p>
          <p className="modal_dop-info">
            <span>ГРАФИК РАБОТЫ ДОСТАВКИ:</span>
            <b>Пн, Вт, Ср, Вс</b> | 12:00 - 23:00 <br />
            <b>Чт, Пт, Сб</b> | 12:00 - 01:00
          </p>
        </div>
        <button className="okButton" onClick={() => props.closeModal(false)}>
          OK
        </button>
      </div>
    </div>
  )
}
export default Modal
