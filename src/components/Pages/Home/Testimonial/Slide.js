import React from 'react';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
import quote from '../../../../assets/quote 1.png'


const Slide = () => {
    return (
        <div className='lg:mx-3'>
            <div className="carousel w-full">

                {/* carousel 1---------------  */}

                <div id="slide10" className="carousel-item relative w-full">

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                        <div className='p-2 lg:p-20 border rounded-lg'>
                            <div className='flex items-center gap-4 mb-3'>
                                <div className='flex items-center gap-4 mb-3'>
                                    <div className="w-14">
                                        <img className='rounded-full' src="https://placeimg.com/80/80/people" alt='' />
                                    </div>
                                    <div>
                                        <h1 className= 'text-2xl font-semibold'>Awlad Hossain</h1>
                                        <p>Businessman</p>
                                    </div>
                                </div>
                                <div className='ml-12'>
                                    <img src={quote} alt="" />
                                </div>
                            </div>


                            <p className='mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <div className='flex items-center my-1'>
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />

                            </div>
                        </div>
                        <div className='p-2 lg:p-20 border rounded-lg'>
                            <div className='flex items-center gap-4 mb-3'>
                                <div className='flex items-center gap-4 mb-3'>
                                    <div className="w-14">
                                        <img className='rounded-full' src="https://placeimg.com/80/80/people" alt='' />
                                    </div>
                                    <div>
                                        <h1 className= 'text-2xl font-semibold'>Jamal Khan</h1>
                                        <p>Businessman</p>
                                    </div>
                                </div>
                                <div className='ml-12'>
                                    <img src={quote} alt="" />
                                </div>
                            </div>
                            <p className='mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <div className='flex items-center my-1 '>
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />

                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide14" className="btn btn-circle  bg-orange-500 border-none"><FaArrowLeft/> </a>
                        <a href="#slide12" className="btn btn-circle bg-orange-500 border-none"><FaArrowRight/> </a>
                    </div>
                </div>

                    {/* carousel 2---------------  */}

                <div id="slide12" className="carousel-item relative w-full">

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                        <div className='p-2 lg:p-20 border rounded-lg'>
                            <div className='flex items-center gap-4 mb-3'>
                                <div className='flex items-center gap-4 mb-3'>
                                    <div className="w-14">
                                        <img className='rounded-full' src="https://placeimg.com/80/80/people" alt='' />
                                    </div>
                                    <div>
                                        <h1 className= 'text-2xl font-semibold'>Forid Ullah</h1>
                                        <p>Businessman</p>
                                    </div>
                                </div>
                                <div className='ml-12'>
                                    <img src={quote} alt="" />
                                </div>
                            </div>


                            <p className='mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <div className='flex items-center my-1'>
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />

                            </div>
                        </div>
                        <div className='p-2 lg:p-20 border rounded-lg' >
                            <div className='flex items-center gap-4 mb-3'>
                                <div className='flex items-center gap-4 mb-3'>
                                    <div className="w-14">
                                        <img className='rounded-full' src="https://placeimg.com/80/80/people" alt='' />
                                    </div>
                                    <div>
                                        <h1 className= 'text-2xl font-semibold'>Ismail Ahmed</h1>
                                        <p>Businessman</p>
                                    </div>
                                </div>
                                <div className='ml-12'>
                                    <img src={quote} alt="" />
                                </div>
                            </div>
                            <p className='mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <div className='flex items-center my-1 '>
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />

                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide10" className="btn btn-circle bg-orange-500 border-none"><FaArrowLeft/></a>
                        <a href="#slide13" className="btn btn-circle bg-orange-500 border-none"><FaArrowRight/> </a>
                    </div>
                </div>

                {/* carousel 3---------------  */}

                <div id="slide13" className="carousel-item relative w-full">

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div className='p-2 lg:p-20 border rounded-lg'>
                            <div className='flex items-center gap-4 mb-3'>
                            <div className='flex items-center gap-4 mb-3'>
                                <div className="w-14">
                                    <img className='rounded-full' src="https://placeimg.com/80/80/people" alt='' />
                                </div>
                                <div>
                                    <h1 className= 'text-2xl font-semibold'>Devid Saw</h1>
                                    <p>Businessman</p>
                                </div>
                            </div>
                            <div className='ml-12'>
                                    <img src={quote} alt="" />
                                </div>
                            </div>
                            <p className='mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <div className='flex items-center my-1'>
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />

                            </div>
                        </div>
                        <div className='p-2 lg:p-20 border rounded-lg'>
                            <div className='flex items-center gap-4 mb-3'>
                            <div className='flex items-center gap-4 mb-3'>
                                <div className="w-14">
                                    <img className='rounded-full' src="https://placeimg.com/80/80/people" alt='' />
                                </div>
                                <div>
                                    <h1 className= 'text-2xl font-semibold'>Tom Cruse</h1>
                                    <p>Businessman</p>
                                </div>
                            </div>
                            <div className='ml-12'>
                                    <img src={quote} alt="" />
                                </div>
                            </div>
                            <p className='mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <div className='flex items-center my-1 '>
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />

                            </div>
                        </div>
                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide12" className="btn btn-circle bg-orange-500 border-none"><FaArrowLeft/></a>
                        <a href="#slide14" className="btn btn-circle bg-orange-500 border-none"><FaArrowRight/> </a>
                    </div>
                </div>

                {/* carousel 4---------------  */}
                <div id="slide14" className="carousel-item relative w-full">

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                        <div className='p-2 lg:p-20 border rounded-lg'>
                            <div className='flex items-center gap-4 mb-3'>
                            <div className='flex items-center gap-4 mb-3'>
                                <div className="w-14">
                                    <img className='rounded-full' src="https://placeimg.com/80/80/people" alt='' />
                                </div>
                                <div>
                                    <h1 className= 'text-2xl font-semibold'>Kristano Padri</h1>
                                    <p>Businessman</p>
                                </div>
                            </div>
                            <div className='ml-12'>
                                    <img src={quote} alt="" />
                                </div>
                            </div>
                            <p className='mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <div className='flex items-center my-1'>
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />

                            </div>
                        </div>
                        <div className='p-2 lg:p-20 border rounded-lg'>
                            <div className='flex items-center gap-4 mb-3'>
                            <div className='flex items-center gap-4 mb-3'>
                                <div className="w-14">
                                    <img className='rounded-full' src="https://placeimg.com/80/80/people" alt='' />
                                </div>
                                <div>
                                    <h1 className= 'text-2xl font-semibold'>Alex Fred</h1>
                                    <p>Businessman</p>
                                </div>
                            </div>
                            <div className='ml-12'>
                                    <img src={quote} alt="" />
                                </div>
                            </div>
                            <p className='mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <div className='flex items-center my-1 '>
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />

                            </div>
                        </div>
                    </div>



                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide13" className="btn btn-circle bg-orange-500 border-none"><FaArrowLeft/></a>
                        <a href="#slide10" className="btn btn-circle bg-orange-500 border-none"><FaArrowRight/> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;