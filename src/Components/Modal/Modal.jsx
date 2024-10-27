import ModalReact from 'react-modal';
import scss from '../Modal/Modal.module.scss';
import clsx from 'clsx';
import { IoClose } from 'react-icons/io5';

const Modal = ({ modalIsOpen, closeModal, children }) => {
  const overlayClass = clsx(scss.ReactModal_Overlay, modalIsOpen && scss.isOpen);

  return (
    <ModalReact
      isOpen={modalIsOpen}
      closeTimeoutMS={300}
      overlayClassName={overlayClass}
      onRequestClose={closeModal}
      ariaHideApp={false}
      className={scss.reactModal_Content}
      bodyOpenClassName={scss.ReactModal__Body}
    >
      <button className={scss.closeBtn} onClick={closeModal}>
        <IoClose className={scss.closeIcon} />
      </button>
      {children}
    </ModalReact>
  );
};

export default Modal;
