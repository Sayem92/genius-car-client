import React from 'react';
import { FaStar } from 'react-icons/fa';

const PopularProductsCart = ({product}) => {
    const {img, name , price} = product

    return (
        <div className="w-96 h-96 bg-base-100 shadow-xl">
        <div className=' mt-8'>
            <img src={img} className='w-80 h-52 mx-auto border rounded-lg' alt="Shoes" />
            
        <div className=" px-10 my-5 text-center">
            <div className='flex justify-center items-center my-1'>
                <FaStar className='text-warning mr-1'/>
                <FaStar className='text-warning mr-1'/>
                <FaStar className='text-warning mr-1'/>
                <FaStar className='text-warning mr-1'/>
                <FaStar className='text-warning mr-1'/>
              
            </div>
            <h2 className=" text-2xl font-semibold">{name}</h2>
            <p className='text-xl font-semibold text-orange-500'>Price: ${price}</p>

        </div>
        </div>
    </div>
    );
};

export default PopularProductsCart;