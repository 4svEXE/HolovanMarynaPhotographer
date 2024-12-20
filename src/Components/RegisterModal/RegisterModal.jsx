import Modal from "Components/Modal/Modal";
import ModalForm from "Components/ModalForm/ModalForm";
import scss from "./RegisterModal.module.scss"

const RegisterModal = ({modalIsOpen,closeModal}) => {

    return ( 
        <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
            <div>
                <h3 className={`${scss.modalTitle} mb-12`}>Ваші дані</h3>
                <ModalForm></ModalForm>
            </div>
        </Modal>
    );
};

export default RegisterModal;