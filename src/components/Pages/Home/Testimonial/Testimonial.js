import React from 'react';
import Slide from './Slide';

const Testimonial = () => {
    return (
        <div className='lg:m-24 p-2 '>
             <div className='text-center mb-12'>
                <p className="text-2xl font-bold text-orange-600"> Testimonial </p>
                <h1 className='text-5xl font-semibold my-4'>What Customer Says</h1>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <Slide></Slide>
        </div>
    );
};

export default Testimonial;