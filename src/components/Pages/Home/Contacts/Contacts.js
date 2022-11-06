import React from 'react';
import { FaCalendarAlt, FaClock, FaPhoneAlt, FaSearchLocation, FaSms } from 'react-icons/fa';



const Contacts = () => {
    return (
        <div className='lg:mx-6  border bg-black text-white rounded-lg p-16'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

                <div className='relative flex justify-center items-center'>
                    <FaCalendarAlt className=' w-10 h-10' />
                    <p
                        className='absolute lg:left-14 lg:top-8 left-2 top-14'>
                        <FaClock className='w-6 h-6 text-red-600 bg-black rounded-2xl' /> </p>
                    <div className='ml-3'>
                        <p className='text-gray-400'>We are open sunday-Thursday</p>
                        <h1 className='text-2xl font-semibold'> 8:00 am - 10:00 pm</h1>
                    </div>
                </div>

                <div className='relative flex justify-center items-center'>
                    <FaPhoneAlt className=' w-10 h-10'> </FaPhoneAlt>
                    <p
                        className='absolute lg:left-20 lg:top-1 left-4 top-6 '>
                        <FaSms className='w-6 h-6  text-red-600 bg-black rounded-2xl' /> </p>
                    <div className='ml-4'>
                        <p className='text-gray-400'>Have a question?</p>
                        <h1 className='text-2xl font-semibold'>01788955378</h1>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <FaSearchLocation className='text-red-600 w-10 h-10' />
                    <div className='ml-3'>
                        <p className='text-gray-400'>Need a repair? our address</p>
                        <h1 className='text-2xl font-semibold'> Suma Street, Dhaka</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;