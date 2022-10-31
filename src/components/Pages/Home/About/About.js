import React from 'react';
import person from '../../../../assets/images/about_us/person.jpg';
import parts from '../../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-20">
            <div className="lg:hero-content w-80 lg:w-full text-center flex-col lg:flex-row">
                <div className='relative w-80 mx-auto lg:w-1/2'>
                <img src={person} alt='' className="p-2 lg:w-4/5 h-full rounded-lg shadow-2xl" />
                <img src={parts}  alt='' className="absolute right-5 top-1/2 border-8 border-white w-3/5  rounded-lg shadow-2xl" />
                </div>
                <div className='mt-20 p-2 lg:w-1/2'>
                    <p className='text-2xl mb-1 text-orange-500 font-bold'>About us</p>
                    <h1 className="text-5xl font-bold mt-5">We are qualified <br />
                     & of experience <br />
                      in this field</h1>
                    <p className="pt-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-5">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn bg-orange-500 rounded-lg border-none">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;