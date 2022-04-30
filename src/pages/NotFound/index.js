import React,{useEffect} from 'react';

const NotFound = () => {

          useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
        });
      });

      return (
          <div className='contacts container'>
              <h3>404 PAGE NOT FOUND</h3>
          </div>
      )};

      export default NotFound;