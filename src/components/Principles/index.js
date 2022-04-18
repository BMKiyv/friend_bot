import React from 'react';
import './style.scss';
import I18n from '../../I18n'

const Principles = () => {
    const principles = [
        {
            header: `${I18n.t('principlesHeader1')}`,
            text: `${I18n.t('principlesText1')}`,
            className: '/images/palms.svg'
        },
        {
            header: `${I18n.t('principlesHeader2')}`,
            text: `${I18n.t('principlesText2')}`,
            className: '/images/doctor.svg'
        },
        {
            header: `${I18n.t('principlesHeader3')}`,
            text: `${I18n.t('principlesText3')}`,
            className: '/images/fingers.svg'
        },
        {
            header: `${I18n.t('principlesHeader4')}`,
            text: `${I18n.t('principlesText4')}`,
            className: '/images/message.svg'
        },
        {
            header: `${I18n.t('principlesHeader5')}`,
            text: `${I18n.t('principlesText5')}`,
            className: '/images/smile3.svg'
        },
        {
            header: `${I18n.t('principlesHeader6')}`,
            text: `${I18n.t('principlesText6')}`,
            className: '/images/smile2.svg'
        }
    ]
    return (
        <div className='container principles' id='principles'>
            <h3>{I18n.t('principlesTitle')}</h3>
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