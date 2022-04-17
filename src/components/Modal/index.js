import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Modal = ({ isModal, children }) => {

    if (!isModal) {
        return null;
    }

    return (
        <div className = 'modalW'>
            {children}
        </div>
    );

};

Modal.propTypes = {
    isModal: PropTypes.bool.isRequired,
};

export default Modal;