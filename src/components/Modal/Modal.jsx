import { Component } from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  handleCloseBackdrop = e => {
    if (e.target !== e.currentTarget) return;
    this.props.toggleModal();
  };

  render() {
    const { modalData } = this.props;
    return (
      <div className={s.overlay} onClick={this.handleCloseBackdrop}>
        <div className={s.modal}>
          <img src={modalData.src} alt={modalData.alt} />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  modalData: PropTypes.object,
  toggleModal: PropTypes.func,
};

export default Modal;