import React,{useState} from 'react';
import './style.scss';
import Button from '../Button/index';
import Modal from '../Modal';
import ModalSupport from '../Modal/ModalSupport';
import { useTranslation } from "react-i18next";

const First = () => {
     const { t } = useTranslation();
    const [isModal,setIsModal] = useState(false)

    const showModal = () =>{
        setIsModal(true)
    }
    const hideModal = () => {
        setIsModal(false)
    }

    return (
        <div className='first' id='main'>
            <div className='first__absolute'></div>
            <div className='container'>
                <div className='first__header'>
                    <h1>{t('firstTitle1')}<span role="img" className='bg-pray'></span>{t('firstTitle2')}<span style={{'display':'block'}}>{t('firstTitle3')}<span role="img" className='bg-flag' /></span></h1>
                </div>
                <p className='first__header-text'>{t('firstText')}</p>
                <div className='first__header-button'>
                    <Button 
                        url = 'https://google.com'
                        theme='main'
                        title={t('firstButtonBlue')}
                        img='/images/tgwhite.png'
                    />
                    <Button 
                        theme='second'
                        title={t('firstButtonWhite')}
                        onPress={showModal}
                    />
                </div>
            </div>
            {isModal && <Modal isModal = {isModal}><ModalSupport onClose={hideModal}/></Modal>}
        </div>
    )
}

export default First;