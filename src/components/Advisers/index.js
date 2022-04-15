import React,{useState, useEffect, useCallback} from 'react';
import './style.scss';
import Btn from '../Button';

const Advisers = () => {
    const advisers = [
        {
            src: '/images/advisers/arieh_shalev.png',
            name: 'Prof Arieh Y. Shalev',
            shortDescription: 'Почесний професор медичної школи Єврейського університету в Єрусалимі та ад`юнкт-професор психіатрії Медичної школи Гроссмана Нью-Йоркського університету. Д-р Шалев є одним з провідних діячів у галузі...',
            description: 'Почесний професор медичної школи Єврейського університету в Єрусалимі та ад`юнкт-професор психіатрії Медичної школи Гроссмана Нью-Йоркського університету. Д-р Шалев є одним з провідних діячів у галузі...'
        },
        {
            src: '/images/advisers/marit_sijbrandij.png',
            name: 'Prof. Marit Sijbrandij',
            shortDescription: 'Почесний професор медичної школи Єврейського університету в Єрусалимі та ад`юнкт-професор психіатрії Медичної школи Гроссмана Нью-Йоркського університету. Д-р Шалев є одним з провідних діячів у галузі...',
            description: 'Почесний професор медичної школи Єврейського університету в Єрусалимі та ад`юнкт-професор психіатрії Медичної школи Гроссмана Нью-Йоркського університету. Д-р Шалев є одним з провідних діячів у галузі...'
        },
        {
            src: '/images/advisers/kate_porcheret.png',
            name: 'Postdoc Fellow Kate  Porcheret',
            shortDescription: 'Почесний професор медичної школи Єврейського університету в Єрусалимі та ад`юнкт-професор психіатрії Медичної школи Гроссмана Нью-Йоркського університету. Д-р Шалев є одним з провідних діячів у галузі...',
            description: 'Почесний професор медичної школи Єврейського університету в Єрусалимі та ад`юнкт-професор психіатрії Медичної школи Гроссмана Нью-Йоркського університету. Д-р Шалев є одним з провідних діячів у галузі...'
        },
        {
            src: '/images/advisers/emily_holmes.png',
            name: 'Prof. Emily Holmes',
            shortDescription: 'Почесний професор медичної школи Єврейського університету в Єрусалимі та ад`юнкт-професор психіатрії Медичної школи Гроссмана Нью-Йоркського університету. Д-р Шалев є одним з провідних діячів у галузі...',
            description: 'Почесний професор медичної школи Єврейського університету в Єрусалимі та ад`юнкт-професор психіатрії Медичної школи Гроссмана Нью-Йоркського університету. Д-р Шалев є одним з провідних діячів у галузі...'
        },
        {
            src: '/images/advisers/iryna_frankova.png',
            name: 'Iryna Frankova',
            shortDescription: 'Почесний професор медичної школи Єврейського університету в Єрусалимі та ад`юнкт-професор психіатрії Медичної школи Гроссмана Нью-Йоркського університету. Д-р Шалев є одним з провідних діячів у галузі...',
            description: 'Почесний професор медичної школи Єврейського університету в Єрусалимі та ад`юнкт-професор психіатрії Медичної школи Гроссмана Нью-Йоркського університету. Д-р Шалев є одним з провідних діячів у галузі...'
        },
        {
            src: 'https://bing.com',
            name: 'Підтримка психічного здоров`я людей які постраждали від війни'
        }
    ]

    const [display,setDisplay] = useState(false)
    const[key,setKey] = useState(0)
    const elem = document.querySelectorAll('.advisers__list-description')

    const readMore = useCallback((e)=> {
            const target = e.currentTarget
           // console.log(key)

                setKey(target.dataset.key)
                setDisplay(!display)
        
    },[display])

    useEffect(()=>{
       
        console.log(key,display)
        
        for(let item of elem){
            let show =  display?'block':'none'
            if(item.dataset.ind===key){
                item.style.display = show;
                console.log(show)
            }

            // else{
            //     item.style.display = 'none'
            //     //console.log(item.style.display,item);
            // }
        }
    },[key,elem,])


    


    return (
        <div className='container advisers' id='advisers'>
            <h3 className='advisers__title'>Едвайзери</h3>
            <div className='advisers__list'>
                {advisers.map((item, i) => {
                    return item.shortDescription ?
                        <div className='advisers__list-item' onClick={readMore} data-key={i} key={i}>
                            <img src={item.src} alt={item.name} />
                            <p className='advisers__list-title solid bold'>{item.name}</p>
                            <p className='advisers__list-shortdescription'>{item.shortDescription}</p>
                            <p className='advisers__list-description' data-ind={i} style={{'display':'none'}} >{item.description}</p>
                            <div className='advisers__list-btn'>
                                <Btn
                                    theme='more'
                                    title='&bull; &bull; &bull;'
                                />
                            </div>
                        </div>
                        :
                        <div className='advisers__list-lastitem' key={i}>
                            <p className='advisers__list-lasttext'>{item.name}</p>
                            <Btn
                                full
                                url={item.src}
                                title='Почати спілкування'
                                theme='second'
                                img='/images/tgblue.png'
                            />
                        </div>
                })}
            </div>
        </div>
    )
}

export default Advisers;