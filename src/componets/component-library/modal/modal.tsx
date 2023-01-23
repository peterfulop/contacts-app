import { Fragment, MouseEventHandler } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = (props: {
  onClose:
    | React.Dispatch<React.SetStateAction<boolean>>
    | MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      onClick={props.onClose as MouseEventHandler<HTMLDivElement>}
      className={styles.backdrop}
    ></div>
  );
};

const ModalOverlay = (props: { children: React.ReactNode }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays') as HTMLElement;

type ModalProps = {
  onClose:
    | React.Dispatch<React.SetStateAction<boolean>>
    | MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
};

const Modal = (props: ModalProps) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
