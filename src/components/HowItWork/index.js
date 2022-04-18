import React from 'react';
import './style.scss';
import Button from '../Button'
import I18n from "../../I18n";


const HowItWork = () => {
    const messages = [
        {
            text: `${I18n.t('howItWorkMessage1')}`,
            className: '/images/smile7.svg'
        },
        {
            text: `${I18n.t('howItWorkMessage2')}`,
            className: '/images/smile9.svg'
        },
        {
            text: `${I18n.t('howItWorkMessage3')}`,
            className: '/images/smile8.svg'
        },
        {
            text: `${I18n.t('howItWorkMessage4')}`,
            className: '/images/smile9.svg'
        },
        {
            text: `${I18n.t('howItWorkMessage5')}`,
            className: '/images/smile10.svg'
        }
    ]
    return (
        <div className='container howitwork' id='aboutbot'>
            <h2 className='howitwork__title'>{I18n.t('howItWorkTitle')}</h2>
            <div className='howitwork__content'>
                <div className='howitwork__content-bigcard'>
                    <div className='howitwork__content-images'>
                       { messages.map((item,i) => {
                          return (
                            <p key={i} className='howitwork__content-image'>{item.text}<span><img src={item.className} alt={item.text}/></span></p>
                          )
                          })}
                    </div> 
                    <p className='howitwork__content-text solid bold'>{I18n.t('howItWorkBigCard')}</p>
                    <Button 
                        url = 'https://google.com'
                        theme='main'
                        title={I18n.t('firstButtonBlue')}
                        img='/images/tgwhite.png'
                    />
                </div>
                <div className='howitwork__content-card'>
                    <span><img className='howitwork__content-img' src='/images/nurse.svg' alt='nurse'/></span>
                    <p className='howitwork__content-smalltext solid'>{I18n.t('howItworkSmallCard1')}</p>
                </div>
                <div className='howitwork__content-card'>
                <span><img className='howitwork__content-img' src='/images/fingers.svg' alt='nurse'/></span>
                    <p className='howitwork__content-smalltext solid'>{I18n.t('howItworkSmallCard2')}</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWork;