import React from 'react';
import './BannerItem.css'

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
            <div className='carousel-img'>
                <img src={image} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 lg:left-24 top-1/4">
                <h1 className='pl-4 text-xl lg:text-6xl lg:pl-0 font-bold text-white'>
                    Affordable <br />
                    Price for Car <br />
                    Servicing
                </h1>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 lg:w-2/5 lg:left-24 top-32 lg:top-1/2">
                <p className='pl-4 text-sm font-thin lg:font-normal lg:pl-0 lg:text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute  lg:flex justify-start  transform -translate-y-1/2 lg:w-2/5 lg:left-24 top-44 right-5 lg:top-3/4">
                <button className="p-2 rounded lg:btn lg:bg-yellow-400 bg-yellow-400 mr-5">Discover More</button>
                <button className="p-2 rounded lg:btn btn-outline btn-warning">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 lg:left-5 bottom-14 lg:right-5 lg:bottom-0">
                <a href={`#slide${prev}`} className="text-blue-700 lg:btn lg:btn-circle mr-36 ml-2 lg:mr-5">❮</a>
                <a href={`#slide${next}`} className="text-blue-700 lg:btn lg:btn-circle ml-36 lg:ml-0 lg:bg-orange-500">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;