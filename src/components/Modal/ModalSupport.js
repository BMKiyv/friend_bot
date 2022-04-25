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
                {/*<p className='modalW-secondtext'>{t('modalText1')}</p>
                 <p className='modalW-secondtext'>{t('modalText2')}</p>
                <p className='modalW-list'><span className='modalW-images'>✅</span>{t('modalList1')}</p>
                <p className='modalW-list'><span className='modalW-images'>✅</span>{t('modalList2')}</p>
                <p className='modalW-list'><span className='modalW-images'>✅</span>{t('modalList3')}</p>
                <p className='modalW-list'><span className='modalW-images'>✅</span>{t('modalList4')}</p>
                <p className='modalW-list'><span className='modalW-images'>✅</span>{t('modalList5')}</p>
                <p className='modalW-list'><span className='modalW-images'>✅</span>{t('modalList6')}</p>
                <p className='modalW-list'><span className='modalW-images'>✅</span>{t('modalList7')}</p>
                <p className='modalW-list'><span className='modalW-images'>✅</span>{t('modalList8')}</p>
                <p className='modalW-list'><span className='modalW-images'>✅</span>{t('modalList9')}</p>
                <p className='modalW-list'><span className='modalW-images'>✅</span>{t('modalList10')}</p>
                <p className='modalW-lasttext'>{t('modalLastText')}</p> */}
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