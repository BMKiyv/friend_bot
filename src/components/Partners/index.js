import React from 'react';
import './style.scss';

const Partners = () => {
    const partners = [
        {
            src: '/images/moz.png',
            alt: 'Міністерство охорони здоров`я',
            href: 'https://moz.gov.ua/'
        },
        {
            src: '/images/minvet.png',
            alt: 'Мінветеранів',
            href: 'https://mva.gov.ua/'
        },
        {
            src: '/images/charite.png',
            alt: 'Благодійний фонд Шаріте',
            href: 'https://www.charite.de/'
        },
        {
            src: '/images/inkog.png',
            alt: 'Інститут когнітивно-поведінкової терапії',
            href: 'https://i-cbt.org.ua/'
        },
        {
            src: '/images/bogomoltsa.png',
            alt: 'Медичний Університет ім. Богомольця',
            href: 'https://nmuofficial.com/'
        }
    ]
    return (
        <div className='container' id='partners'>
            <h3>Партнери</h3>
            <div className='partners__cards'>
                {partners.map((item,i)=>{
                    return (
                        <a className='partners__cards-card' href={item.href} key={i}>
                            <img className='partners__cards-img' src={item.src} alt={item.alt} />
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Partners;