import React from 'react';
import { Link } from 'react-router-dom';

const TopBanner = () => {

    return (
        <div className='lg:flex'>
            <section className="relative text-white bg-center bg-no-repeat bg-cover lg:w-2/3" role="banner" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1607039551379-1a633b87cdc5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2glMjBoYW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80)" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="relative px-4 py-24 mx-auto max-w-screen-xl sm:px-6 lg:px-8 sm:py-36  lg:flex lg:items-center">

                    <div className="max-w-3xl mx-auto text-center">

                        <h1
                            className="text-3xl font-extrabold text-transparent sm:text-6xl bg-clip-text text-white text-opacity-90"
                        >
                            YOUR WEARING REFLECTS WHO YOU ARE
                        </h1>

                        <p className="max-w-xl mx-auto mt-6 text-lg">
                            See our latest and stylish collection and find the best one that matches your personality and attitude
                        </p>

                        <div className="mt-8 sm:justify-center sm:flex">
                            <Link
                                to="/explore"
                                className="block px-5 py-3 mt-3 font-medium border transition duration-500 border-indigo-600 rounded-lg sm:ml-3 sm:mt-0 hover:bg-indigo-500"
                            >
                                EXPLORE OUR COLLECTIONS
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex flex-col-reverse lg:flex-col lg:ml-10  lg:w-1/2'>
                <section className="lg:mt-0 mt-10 text-white bg-center bg-no-repeat bg-cover min-w-full lg:h-2/3" role="banner" style={{ backgroundImage: "url(https://cdn.creationwatches.com/products/includes/templates/creation/assets/img/mens-watches.webp)" }}>
                    <div className='min-h-full py-16 flex flex-col justify-center items-center space-y-3'>
                        <p className='text-xl'>PRODUCT OF THE DAY</p>
                        <p className='text-3xl lg:text-5xl transition duration-500 text-indigo-500 hover:text-white'>FOSSIL ROYAL MENZ</p>
                        <p>FULLY WATER RESISTANT</p>
                        <p>CLASSY LOOKING</p>
                    </div>
                </section>
                <section className='lg:mt-0 mt-10 border-2 border-indigo-700 bg-white text-white  transition duration-1000 min-w-full lg:h-1/3 group hover:bg-indigo-500' >
                    <div className='min-h-full text-indigo-400 flex flex-col justify-center transition duration-1000 items-center space-y-3 group-hover:text-white'>
                        <p className='lg:text-2xl text-xl'>31<sup>th</sup> DECEMBER</p>
                        <p className='lg:text-2xl text-2xl'>YEAR ENDING MEGA SALE</p>
                        <p className='lg:text-4xl text-3xl'>UP TO 60% DISCOUNT</p>
                    </div>
                </section>
            </section>

        </div>

    );
};

export default TopBanner;