import './Modal.css'
const Modal = (props) => {
  return (
    <div
      className="modalBackground"
      onClick={() => !props.success && props.closeModal(false)}
    >
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="modal__title">{props.title}</div>
        <div className="modal__body">
          <p>{props.info}</p>
        </div>
        <button
          className="okButton"
          onClick={() =>
            props.success ? props.clearCart() : props.closeModal(false)
          }
        >
          OK
        </button>
      </div>
    </div>
  )
}
export default Modal
