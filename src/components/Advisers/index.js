import React,{useState, useEffect, useCallback} from 'react';
import './style.scss';
import Btn from '../Button';
import { useTranslation } from "react-i18next";

const Advisers = () => {
    const { t } = useTranslation();
    const advisers = [[
        {
            src: '/images/advisers/arieh_shalev.png',
            name: 'Prof Arieh Y. Shalev',
            shortDescription: `${t('advisersShortDescrition')}`,
            description: `${t('advisersDescription')}`
        },
        {
            src: '/images/advisers/marit_sijbrandij.png',
            name: 'Prof. Marit Sijbrandij',
            shortDescription: `${t('advisersShortDescrition')}`,
            description: `${t('advisersDescription')}`
        },
        {
            src: '/images/advisers/kate_porcheret.png',
            name: 'Postdoc Fellow Kate  Porcheret',
            shortDescription: `${t('advisersShortDescrition')}`,
            description: `${t('advisersDescription')}`
        }
    ],
    [
        {
            src: '/images/advisers/emily_holmes.png',
            name: 'Prof. Emily Holmes',
            shortDescription: `${t('advisersShortDescrition')}`,
            description: `${t('advisersDescription')}`
        },
        {
            src: '/images/advisers/iryna_frankova.png',
            name: 'Iryna Frankova',
            shortDescription: `${t('advisersShortDescrition')}`,
            description: `${t('advisersDescription')}`
           
        },
        {
            src: 'https://bing.com',
            name: `${t('advisersLastTitle')}`
        }
    ]
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
        for(let item of elem){
            let show =  display?'block':'none'
            if(item.dataset.ind===key){
                item.style.display = show;
                }
        }
    },[key,elem,display])

    const showCards = (item, i) => {
        return item.shortDescription ?
            <div className='advisers__list-item' onClick={readMore} data-key={item.name} key={i}>
                <img src={item.src} alt={item.name} />
                <p className='advisers__list-title solid bold'>{item.name}</p>
                <p className='advisers__list-shortdescription'>{item.shortDescription}</p>
                <p className='advisers__list-description' data-ind={item.name} style={{'display':'none'}} >{item.description}</p>
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
                    title={t('advisersLastBtn')}
                    theme='second'
                    img='/images/tgblue.png'
                />
            </div>
    }

    return (
        <div className='container advisers' id='advisers'>
            <h3 className='advisers__title'>{t('advisersTitle')}</h3>
            <div className='advisers__list-wrap'>
                <div className='advisers__list-left'>
                    {advisers[0].map(showCards)}
                </div>
                <div className='advisers__list'>
                    {advisers[1].map(showCards)}
                </div>
            </div>
        </div>
    )
}

export default Advisers;