import React from 'react';
import error from '../assets/images/errorPage.jpg'

const ErrorPage = () => {
    return (
        <div className='lg:m-20'>
            <img className='rounded' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;