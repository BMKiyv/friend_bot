import React,{useState} from 'react';
import './style.scss';
import Button from '../Button/index';
import Modal from '../Modal';
import ModalSupport from '../Modal/ModalSupport';

const First = () => {
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
                    <h1> Підтримка <span role="img" className='bg-pray'></span> психічного здоров'я людей які постраждали від війни<span style={{'display':'block'}}>в Україні<span role="img" className='bg-flag' /></span></h1>
                </div>
                <p className='first__header-text'>Ми безкоштовно допоможемо всім, хто потребує підтримки</p>
                <div className='first__header-button'>
                    <Button 
                        url = 'https://google.com'
                        theme='main'
                        title='Почати спілкування'
                        img='/images/tgwhite.png'
                    />
                    <Button 
                        //url = 'https://bing.com'
                        theme='second'
                        title='Підтримати нас'
                        onPress={showModal}
                    />
                </div>
            </div>
            {isModal && <Modal isModal = {isModal}><ModalSupport onClose={hideModal}/></Modal>}
        </div>
    )
}

export default First;