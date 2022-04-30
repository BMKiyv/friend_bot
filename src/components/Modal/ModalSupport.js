import React from 'react';
import './style.scss';
import Btn from '../Button';
import { useTranslation } from "react-i18next";

const ModalSupport = ({ onClose }) => {
    const { t } = useTranslation();

    return (
        <div className='modalW-wrap'>
            <div className='modalW-close' onClick={onClose}></div>
            <h2 className='modalW-title'>{t('modalTitle')}</h2>
            <div className='modalW-text-wrap'>
                <p className='modalW-text'>{t('modalText0')}</p>
            </div>
            <div className='modalW-btn'>
                <Btn
                    title={t('modalBtn')}
                    onPress={onClose}
                    theme='main'
                    url='https://bit.ly/3KDqcLT'
                />
            </div>
        </div>
    );

};
export default ModalSupport;