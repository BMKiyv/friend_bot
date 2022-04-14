import React from 'react';
import './style.scss';
import Button from '../Button/index';

const First = () => {
    return (
        <div className='first' id='main'>
            <div className='first__absolute' />
            <div className='container'>
                <div className='first__header'>
                    <h1> Підтримка <span role="img" className='bg-pray'></span> психічного здоров'я людей які постраждали від війни в Україні <span role="img" className='bg-flag'></span></h1>
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
                        url = 'https://bing.com'
                        theme='second'
                        title='Підтримати нас'
                    />
                </div>
            </div>
        </div>
    )
}

export default First;