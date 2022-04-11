import React from 'react';
import './style.scss';

const Principles = () => {
    const principles = [
        {
            header: 'Допомога абсолютно безкоштовна',
            text: 'Ми не переслідуємо фінансові цілі',
            className: 'bg-palms'
        },
        {
            header: 'Висококваліфіковані спеціалісти',
            text: 'Кваліфікація кожного спеціаліста перевіряється та підтверджується',
            className: 'bg-doctor'
        },
        {
            header: 'Зручний і швидкий доступ + мінімум зусиль',
            text: 'Швидка реєстрація та оперативний підбір фахівця',
            className: 'bg-fingers50'
        },
        {
            header: 'Універсальність',
            text: 'Можливість знайти терапевта, який володіє вашою мовою',
            className: 'bg-mess54'
        },
        {
            header: 'Індивідуальний підхід',
            text: 'Можливість вибрати зручний спосіб спілкування, зручний час для консультації',
            className: 'bg-nimb'
        },
        {
            header: 'Захист персональних даних',
            text: 'Жорстка політика конфіденційності, вся інформація надійно захищена',
            className: 'bg-silence'
        }
    ]
    return (
        <div className='container principles'>
            <h3>Наші прінципи:</h3>
            <div className='principles__content'>
                {principles.map((item,i)=>{
                    return (
                        <div className='principles__content-item' key={i}>
                            <figure className={item.className}/>
                            <div className='principles__content-mean'>
                                <p className='principles__content-header solid'>{item.header}</p>
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