import Modal from "Components/Modal/Modal";
import ModalForm from "Components/ModalForm/ModalForm";

const RegisterModal = ({modalIsOpen,closeModal}) => {

    return ( 
        <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
            <div>
                <h3>Ваші дані</h3>
                <ModalForm></ModalForm>
            </div>
        </Modal>
    );
};

export default RegisterModal;