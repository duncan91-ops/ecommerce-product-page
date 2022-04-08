import ReactDOM from "react-dom";
import Wrapper from "../assets/wrappers/Modal";

type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  closeModal: () => void;
  large?: boolean;
};

const Modal = ({ children, open, closeModal, large }: ModalProps) => {
  return ReactDOM.createPortal(
    open && (
      <Wrapper className={`${large && "large"}`} onClick={closeModal}>
        {children}
      </Wrapper>
    ),
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
