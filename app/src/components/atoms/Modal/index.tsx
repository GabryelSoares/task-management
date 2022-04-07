import { FC, ReactNode } from 'react';
import Modal from 'react-modal';
import { StyledCloseButton, StyledContent, StyledHeader } from './styled';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    height: '50vh',
    padding: 0,
    borderRadius: '4px',
    border: '2px solid #3f51b5',
  },
};

interface Props {
  icon?: ReactNode;
  title: string;
  open: boolean;
  onClickOpen: () => void;
  onClickClose: () => void;
}

export const MyModal: FC<Props> = ({ children, icon, title, open, onClickOpen, onClickClose }) => {

  return (
    <div className='MyModal'>
      <div className='link' onClick={onClickOpen}>{icon}</div>
      <Modal
        isOpen={open}
        onRequestClose={onClickClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StyledHeader>
          {title}
          <StyledCloseButton onClick={onClickClose}>X</StyledCloseButton>
        </StyledHeader>
        <StyledContent>
          {children}
        </StyledContent>
      </Modal>
    </div>
  );

}
