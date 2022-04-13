import React from 'react';
import './style.scss';
import Button from '../Button'


const HowItWork = () => {
    const messages = [
        {
            text: 'Мені потрібна підтрімка',
            className: '/images/smile7.svg'
        },
        {
            text: 'Чудово',
            className: '/images/smile9.svg'
        },
        {
            text: 'Так собі',
            className: '/images/smile8.svg'
        },
        {
            text: 'Я впораюсь',
            className: '/images/smile9.svg'
        },
        {
            text: 'Так собі',
            className: '/images/smile10.svg'
        }
    ]
    return (
        <div className='container howitwork' id='aboutbot'>
            <h2 className='howitwork__title'>Ми створили цю платформу, тому що для нас важливо<span className='howitwork__title'> піклуватися про всіх, хто постраждав 
            від війни в Україні.</span></h2>
            <div className='howitwork__content'>
                <div className='howitwork__content-bigcard'>
                    <div className='howitwork__content-images'>
                       { messages.map((item,i) => {
                          return (
                            <p key={i} className='howitwork__content-image'>{item.text}<span><img src={item.className} alt={item.text}/></span></p>
                          )
                          })}
                    </div> 
                    <p className='howitwork__content-text solid bold'>
                        Ця сторінка надає вам швидкий і прямий 
                        онлайн-доступ до чат-боту, що допоможе швидко впоратись із наслідками травматичної події.
                    </p>
                    <Button 
                        url = 'https://google.com'
                        theme='main'
                        title='Почати спілкування'
                        img='/images/tgwhite.png'
                    />
                </div>
                <div className='howitwork__content-card'>
                    <span><img src='/images/nurse.svg' alt='nurse'/></span>
                    <p className='howitwork__content-smalltext solid'>Також ми надаємо доступ до фахівців із психічного здоров’я, які витрачають час, щоб підтримати вас і ваші сім’ї в ці важкі часи.</p>
                </div>
                <div className='howitwork__content-card'>
                <span><img src='/images/fingers.svg' alt='nurse'/></span>
                    <p className='howitwork__content-smalltext solid'>Незалежно від того, що відбувається зараз, важливо залишатися спокійним і сильним, наскільки це можливо. Ми тут, щоб допомогти вам зробити це.</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWork;