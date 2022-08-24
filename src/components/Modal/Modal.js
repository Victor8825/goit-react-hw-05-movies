import PropTypes from 'prop-types';

import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './StyledModal';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeBtnClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeBtnClick);
  }

  onEscapeBtnClick = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <Overlay onClick={this.onOverlayClick}>
        <ModalWindow>{children}</ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
