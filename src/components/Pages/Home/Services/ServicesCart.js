import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCart = ({ cart }) => {
    const { _id, title, img, price } = cart;

    return (

        <div className="lg:w-96 h-96 bg-base-100 shadow-xl">
            <div className=' mt-8'>
                <img src={img} className='w-72 lg:w-80 h-52 mx-auto rounded-lg' alt="Shoes" />

                <div className=" px-10 my-5">
                    <h2 className=" text-2xl font-semibold">{title}</h2>

                    <div className="flex justify-between mt-5">
                        <p className='text-xl font-semibold text-orange-500'>Price: ${price}</p>
                        <Link to={`/checkout/${_id}`}>
                            <button className="p-2 text-orange-500">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;