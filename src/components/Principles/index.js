import React from 'react';
import './style.scss';

const Principles = () => {
    const principles = [
        {
            header: 'Допомога абсолютно безкоштовна',
            text: 'Ми не переслідуємо фінансові цілі',
            className: '/images/palms.svg'
        },
        {
            header: 'Висококваліфіковані спеціалісти',
            text: 'Кваліфікація кожного спеціаліста перевіряється та підтверджується',
            className: '/images/doctor.svg'
        },
        {
            header: 'Зручний і швидкий доступ + мінімум зусиль',
            text: 'Швидка реєстрація та оперативний підбір фахівця',
            className: '/images/fingers.svg'
        },
        {
            header: 'Універсальність',
            text: 'Можливість знайти терапевта, який володіє вашою мовою',
            className: '/images/message.svg'
        },
        {
            header: 'Індивідуальний підхід',
            text: 'Можливість вибрати зручний спосіб спілкування, зручний час для консультації',
            className: '/images/smile3.svg'
        },
        {
            header: 'Захист персональних даних',
            text: 'Жорстка політика конфіденційності, вся інформація надійно захищена',
            className: '/images/smile2.svg'
        }
    ]
    return (
        <div className='container principles' id='principles'>
            <h3>Наші прінципи:</h3>
            <div className='principles__content'>
                {principles.map((item,i)=>{
                    return (
                        <div className='principles__content-item' key={i}>
                            <img src={item.className} alt={item.header}/>
                            <div className='principles__content-mean'>
                                <p className='principles__content-header solid bold'>{item.header}</p>
                                <p className='principles__content-text'>{item.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Principles;