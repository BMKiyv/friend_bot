import React,{useEffect} from 'react';
import './style.scss';

const Contacts = () => {

          useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
        });
      });

      return (
          <div className='contacts container'>
              <h3>Our contacts:</h3>
              <p className='contacts__text'>Our support works 24/7 If you have any question, please contact us:</p>
              <p className='contacts__text'>Our e-mail:<a className='contacts__link' href='mailto:a.bachtalovsky@dforce.com.ua'>a.bachtalovsky@dforce.com.ua</a></p>
              <p className='contacts__text'>Our phone number:<a className='contacts__link' href='tel:+380442470610'>+380442470610</a></p>
          </div>
      )};

      export default Contacts;