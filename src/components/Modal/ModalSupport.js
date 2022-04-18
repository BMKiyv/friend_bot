import React from 'react';
import './style.scss';
import Btn from '../Button';

const ModalSupport = ({ onClose }) => {

    return (
        <div className='modalW-wrap'>
            <div className='modalW-close' onClick={onClose}></div>
            <h2 className='modalW-title'>Ми пишаємося тим, що ми неприбуткові, некорпоровані та безкомпромісні.</h2>
            <div className='modalW-text-wrap'>
                <p className='modalW-text'>Тисячі таких, як ви, допомагають нам. Ми покладаємося на пожертви, щоб виконати нашу місію та допомогти якомога більшій кількості людей.</p>
                <p className='modalW-secondtext'>Кошти, зібрані на благодійний рахунок, будуть направлені:</p>
                <p className='modalW-list'><span className='modalW-images'><img src='/images/ok.svg' alt='ok' /></span>На допомогу людям</p>
                <p className='modalW-list'><span className='modalW-images'><img src='/images/ok.svg' alt='ok' /></span>Створення нових методик</p>
                <p className='modalW-list'><span className='modalW-images'><img src='/images/ok.svg' alt='ok' /></span>Оплату праці спеціалістів</p>
                <p className='modalW-list'><span className='modalW-images'><img src='/images/ok.svg' alt='ok' /></span>Будуть направлені на допомогу людям</p>
                <p className='modalW-list'><span className='modalW-images'><img src='/images/ok.svg' alt='ok' /></span>Частина коштів буде відраховано у фонд повернись живим</p>
                <p className='modalW-list'><span className='modalW-images'><img src='/images/ok.svg' alt='ok' /></span>На допомогу людям</p>
                <p className='modalW-list'><span className='modalW-images'><img src='/images/ok.svg' alt='ok' /></span>Створення нових методик</p>
                <p className='modalW-list'><span className='modalW-images'><img src='/images/ok.svg' alt='ok' /></span>Оплату праці спеціалістів</p>
                <p className='modalW-list'><span className='modalW-images'><img src='/images/ok.svg' alt='ok' /></span>Будуть направлені на допомогу людям</p>
                <p className='modalW-list'><span className='modalW-images'><img src='/images/ok.svg' alt='ok' /></span>Частина коштів буде відраховано у фонд повернись живим</p>
                <p className='modalW-lasttext'>Підтримайте нас будь якою сумою</p>
            </div>
            <div className='modalW-btn'>
                <Btn
                    title='Підтримати нас'
                    onPress={onClose}
                    theme='main'
                />
            </div>
        </div>
    );

};
export default ModalSupport;