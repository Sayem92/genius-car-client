import { faClockRotateLeft, faHeadset, faPeopleGroup, faScrewdriverWrench, faShieldAlt, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Features = () => {
    return (
        <div className='p-2 mb-12'>
            <div className='text-center mb-12'>
                <p className="text-2xl font-bold text-orange-600"> Core Features </p>
                <h1 className='text-5xl font-semibold my-4'>Why Choose Us</h1>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-6 gap-4  text-center'>
                <div className='border p-4 rounded-lg'>
                <FontAwesomeIcon className='w-10 h-10 text-red-500' icon={faPeopleGroup} />
                    <p>Expert Team</p>
                </div>

                <div className='border p-4 rounded-lg'>
                <FontAwesomeIcon className='w-10 h-10 text-blue-600' icon={faClockRotateLeft} />
                    <p>Timely Delivery</p>
                </div>

                <div className='border p-4 bg-orange-500 text-white rounded-lg'>
                <FontAwesomeIcon className='w-10 h-10 ' icon={faHeadset} />
                    <p>24/7 Support</p>
                </div>

                <div className='border p-4 rounded-lg'>
                <FontAwesomeIcon className='w-10 h-10 text-yellow-500' icon={faScrewdriverWrench} />
                    <p>Best Equipment</p>
                </div>

                <div className='border p-4 rounded-lg'>
                <FontAwesomeIcon className='w-10 h-10 text-green-500' icon={faShieldAlt} />
                    <p>100% Guranty</p>
                </div>

                <div className='border p-4 rounded-lg'>
                <FontAwesomeIcon className='w-10 h-10 text-sky-600' icon={faTruck} />
                    <p>Timely Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default Features;