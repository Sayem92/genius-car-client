import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServicesCart from './ServicesCart';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    // console.log(services);
    return (
        <div className='p-2'>
            <div className='text-center mt-16 mb-12'>
                <p className="text-2xl font-bold text-orange-600"> Service </p>
                <h1 className='text-5xl font-semibold my-4'>Our Services Area</h1>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(cart => <ServicesCart
                    key={cart._id}
                    cart = {cart}
                    ></ServicesCart>)
                }
            </div>
            <div className='text-center my-12'>
            <button className="btn btn-outline btn-warning text-orange-500">More Services</button>
            </div>
        </div>
    );
};

export default Services;