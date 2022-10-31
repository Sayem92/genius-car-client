import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PopularProductsCart from './PopularProductsCart';

const PopularProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('popular-products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products);

    return (
        <div className='p-4'>
            <div className='text-center mb-12'>
                <p className="text-2xl font-bold text-orange-600"> Popular Products </p>
                <h1 className='text-5xl font-semibold my-4'>Browse Our Products</h1>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products.map(product => <PopularProductsCart
                        key={product._id}
                        product={product}
                    ></PopularProductsCart>)
                }
            </div>
            <div className='text-center my-12'>
                <button className="btn btn-outline btn-warning text-orange-500">More Products</button>
            </div>
        </div>
    );
};

export default PopularProducts;