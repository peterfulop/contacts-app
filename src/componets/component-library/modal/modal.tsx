import { Fragment, MouseEventHandler } from 'react';
import ReactDOM from 'react-dom';

import styled from '../../../theme/styled';

const BackdropDiv = styled('div')({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100vh',
  zIndex: ' 20',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
});

const ModalOverlayDiv = styled('div')(({ theme }) => ({
  padding: '24px',
  position: 'fixed',
  width: '100%',
  maxWidth: '364px',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.colors.G100,
  borderRadius: '8px',
  zIndex: '30',
}));

const Backdrop = (props: {
  onClose:
    | React.Dispatch<React.SetStateAction<boolean>>
    | MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <BackdropDiv
      onClick={props.onClose as MouseEventHandler<HTMLDivElement>}
    ></BackdropDiv>
  );
};

const ModalOverlay = (props: { children: React.ReactNode }) => {
  return <ModalOverlayDiv>{props.children}</ModalOverlayDiv>;
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
