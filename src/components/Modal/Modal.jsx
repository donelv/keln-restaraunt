import './Modal.css'
const Modal = (props) => {
  return (
    <div className="modalBackground" onClick={() => props.closeModal(false)}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="modal__title">Произошла ошибка</div>
        <div className="modal__body">
          <p>{props.info}</p>
        </div>
        <button className="okButton" onClick={() => props.closeModal(false)}>
          OK
        </button>
        <div className="modal__footer"></div>
      </div>
    </div>
  )
}
export default Modal
