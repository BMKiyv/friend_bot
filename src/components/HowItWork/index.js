import React from 'react';
import './style.scss';
import Button from '../Button'


const HowItWork = () => {
    const messages = [
        {
            text: 'Мені потрібна підтрімка',
            className: 'bg-smile7'
        },
        {
            text: 'Чудово',
            className: 'bg-smile8'
        },
        {
            text: 'Так собі',
            className: 'bg-smile9'
        },
        {
            text: 'Я впораюсь',
            className: 'bg-smile8'
        },
        {
            text: 'Так собі',
            className: 'bg-smile10'
        }
    ]
    return (
        <div className='container howitwork'>
            <h2 className='howitwork__title'>Ми створили цю платформу, тому що для нас важливо піклуватися про всіх, хто постраждав 
            від війни в Україні.</h2>
            <div className='howitwork__content'>
                <div className='howitwork__content-bigcard'>
                    <div className='howitwork__content-images'>
                       { messages.map((item,i) => {
                          return (
                            <p key={i} className='howitwork__content-image'>{item.text}<span className={item.className}/></p>
                          )
                          })}
                    </div> 
                    <p className='howitwork__content-text solid'>
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
                    <span className='bg-nurse' />
                    <p className='howitwork__content-smalltext'>Також ми надаємо доступ до фахівців із психічного здоров’я, які витрачають час, щоб підтримати вас і ваші сім’ї в ці важкі часи.</p>
                </div>
                <div className='howitwork__content-card'>
                    <span className='bg-fingers' />
                    <p className='howitwork__content-smalltext'>Незалежно від того, що відбувається зараз, важливо залишатися спокійним і сильним, наскільки це можливо. Ми тут, щоб допомогти вам зробити це.</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWork;