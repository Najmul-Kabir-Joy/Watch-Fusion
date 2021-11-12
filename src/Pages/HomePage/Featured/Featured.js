import React from 'react';
import { Link } from 'react-router-dom';

const Featured = () => {
    return (
        <section className=' mx-auto py-14'>
            <div className='grid grid-cols lg:grid-cols-3 lg:gap-20 md:gap-10 gap-5'>
                <div className=' bg-green-300 text-center group hover:bg-transparent border-2  hover:border-green-400 transition duration-1000'>
                    <div className='p-10 text-gray-700 group-hover:text-green-400 transition duration-1000'>
                        <p className='text-5xl'>ROYAL AURORA</p>
                        <p className='text-xl pt-5'>THE SUPREME COLLECTION</p>
                    </div>
                    <div className='block mx-auto pb-5'>
                        <Link
                            to="/explore"
                            className="px-5 py-2 mt-3 text-gray-700 font-medium  transition duration-500 border-2 border-green-600 rounded hover:bg-green-400 hover:text-white hover:border-green-400"
                        >
                            CHECK OUT
                        </Link>
                    </div>
                    <div className='block mx-auto w-3/4'>
                        <img src="https://freepngimg.com/thumb/watch/22383-5-branded-watch-transparent-image.png" alt="" />
                    </div>
                </div>
                {/* SECOND ONE */}
                <div className=' bg-pink-300 text-center group hover:bg-transparent border-2  hover:border-pink-400 transition duration-1000'>
                    <div className='p-10 text-gray-700 group-hover:text-pink-400 transition duration-1000'>
                        <p className='text-5xl'>FIONA SHINE</p>
                        <p className='text-xl pt-5'>SPECIALLY FOR WOMANS</p>
                    </div>
                    <div className='block mx-auto pb-5'>
                        <Link
                            to="/explore"
                            className="px-5 py-2 mt-3 text-gray-700 font-medium  transition duration-500 border-2 border-pink-600 rounded hover:bg-pink-400 hover:text-white hover:border-pink-400"
                        >
                            CHECK OUT
                        </Link>
                    </div>
                    <div className="block mx-auto w-3/4">
                        <img src="https://freepngimg.com/thumb/watch/22760-2-branded-watch-file.png" alt="" />
                    </div>
                </div>
                {/* THIRD ONE */}
                <div className=' bg-blue-300 text-center group hover:bg-transparent border-2  hover:border-blue-400 transition duration-1000'>
                    <div className='p-10 text-gray-700 group-hover:text-blue-400 transition duration-1000'>
                        <p className='text-5xl'>LASTIC BLIST</p>
                        <p className='text-xl pt-5'>THE RISING STARS</p>
                    </div>
                    <div className='block mx-auto pb-5'>
                        <Link
                            to="/explore"
                            className="px-5 py-2 mt-3 text-gray-700 font-medium  transition duration-500 border-2 border-blue-600 rounded hover:bg-blue-400 hover:text-white hover:border-blue-400"
                        >
                            CHECK OUT
                        </Link>
                    </div>
                    <div className="block mx-auto w-3/4 pt-6">
                        <img className='pb-10' src="https://freepngimg.com/thumb/watch/22306-4-branded-watch-transparent.png" alt="" />
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Featured;