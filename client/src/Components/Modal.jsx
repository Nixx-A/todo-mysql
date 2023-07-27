const Modal = ({ isOpen, children, styles }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <dialog className={styles} open>
        {children}
      </dialog>
    </div>
  )
}

export default Modal