import React from 'react';
import './style.scss';
import Btn from '../Button';

const Advisers = () => {
    const advisers = [
        {
            src: '/images/advisers/arieh_shalev.png',
            name:'Prof Arieh Y. Shalev',
            shortDescription: 'Почесний професор медичної школи Єврейського університету в Єрусалимі та ад`юнкт-професор психіатрії Медичної школи Гроссмана Нью-Йоркського університету. Д-р Шалев є одним з провідних діячів у галузі...',
            description: 'Почесний професор медичної школи Єврейського університету в Єрусалимі та ад`юнкт-професор психіатрії Медичної школи Гроссмана Нью-Йоркського університету. Д-р Шалев є одним з провідних діячів у галузі...'
        },
                {
            src: '/images/advisers/marit_sijbrandij.png',
            name:'Prof. Marit Sijbrandij',
            shortDescription: 'Почесний професор медичної школи Єврейського університету в Єрусалимі та ад`юнкт-професор психіатрії Медичної школи Гроссмана Нью-Йоркського університету. Д-р Шалев є одним з провідних діячів у галузі...',
            description: 'Почесний професор медичної школи Єврейського університету в Єрусалимі та ад`юнкт-професор психіатрії Медичної школи Гроссмана Нью-Йоркського університету. Д-р Шалев є одним з провідних діячів у галузі...'
        },
        {
            src: '/images/advisers/kate_porcheret.png',
            name:'Postdoc Fellow Kate  Porcheret',
            shortDescription: 'Почесний професор медичної школи Єврейського університету в Єрусалимі та ад`юнкт-професор психіатрії Медичної школи Гроссмана Нью-Йоркського університету. Д-р Шалев є одним з провідних діячів у галузі...',
            description: 'Почесний професор медичної школи Єврейського університету в Єрусалимі та ад`юнкт-професор психіатрії Медичної школи Гроссмана Нью-Йоркського університету. Д-р Шалев є одним з провідних діячів у галузі...'
        },
        {
            src: '/images/advisers/emily_holmes.png',
            name:'Prof. Emily Holmes',
            shortDescription: 'Почесний професор медичної школи Єврейського університету в Єрусалимі та ад`юнкт-професор психіатрії Медичної школи Гроссмана Нью-Йоркського університету. Д-р Шалев є одним з провідних діячів у галузі...',
            description: 'Почесний професор медичної школи Єврейського університету в Єрусалимі та ад`юнкт-професор психіатрії Медичної школи Гроссмана Нью-Йоркського університету. Д-р Шалев є одним з провідних діячів у галузі...'
        },
        {
            src: '/images/advisers/iryna_frankova.png',
            name:'Iryna Frankova',
            shortDescription: 'Почесний професор медичної школи Єврейського університету в Єрусалимі та ад`юнкт-професор психіатрії Медичної школи Гроссмана Нью-Йоркського університету. Д-р Шалев є одним з провідних діячів у галузі...',
            description: 'Почесний професор медичної школи Єврейського університету в Єрусалимі та ад`юнкт-професор психіатрії Медичної школи Гроссмана Нью-Йоркського університету. Д-р Шалев є одним з провідних діячів у галузі...'
        },
        {
            src: 'https://bing.com',
            name:'Підтримка психічного здоров`я людей які постраждали від війни'
        }
    ]
    return (
        <div className='container advisers' id='advisers'>
            <h3 className='advisers__title'>Едвайзери</h3>
            <div className='advisers__list'>
                {advisers.map((item,i)=>{
                    return item.shortDescription?
                    <div className='advisers__list-item' key={i}>
                        <img src={item.src} alt={item.name}/>
                        <p className='advisers__list-title solid bold'>{item.name}</p>
                        <p className='advisers__list-shortdescription'>{item.shortDescription}</p>
                        <p className='advisers__list-description' style={{'display':'none'}}>{item.description}</p>
                        <div className='advisers__list-btn'>
                            <Btn
                                theme='more'
                               title ='&bull; &bull; &bull;'
                            />
                        </div>


                    </div>
                    :
                    <div  className='advisers__list-lastitem' key={i}>
                        <p className='advisers__list-lasttext'>{item.name}</p>
                        <Btn 
                            url={item.src}
                            title='Почати спілкування'
                            theme = 'second'
                            img='/images/tgblue.png'
                        />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Advisers;