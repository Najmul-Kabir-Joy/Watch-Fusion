import React from 'react';

const WhyUs = () => {
    return (
        <div data-aos="fade-right" data-aos-duration="1500">
            <section className="text-black body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className='my-5 pb-5 text-center'>
                        <h1 className='text-5xl border-b-4 transition duration-1000 hover:border-indigo-400 inline'>WHAT UNIQUIFY US</h1>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center" data-aos="flip-up" data-aos-duration="1500">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-indigo-200 px-4 py-6 rounded-lg shadow-lg group transform transition duration-1000 hover:-translate-y-4 hover:shadow-2xl hover:bg-indigo-400">
                                <i className="fas fa-truck text-indigo-500 text-5xl mb-3 inline-block transition duration-1000 group-hover:text-white"></i>
                                <h2 className="title-font font-medium text-3xl text-gray-900 transition duration-1000 group-hover:text-white">FASTEST</h2>
                                <p className="leading-relaxed transition duration-1000 group-hover:text-white">DELIVERY</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-indigo-200 px-4 py-6 rounded-lg shadow-lg group transform transition duration-1000 hover:-translate-y-4 hover:shadow-2xl hover:bg-indigo-400">
                                <i className="fas fa-gifts text-indigo-500 text-5xl mb-3 inline-block transition duration-1000 group-hover:text-white"></i>
                                <h2 className="title-font font-medium text-3xl text-gray-900 transition duration-1000 group-hover:text-white">GIFTS</h2>
                                <p className="leading-relaxed transition duration-1000 group-hover:text-white">WINNING</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-indigo-200 px-4 py-6 rounded-lg shadow-lg group transform transition duration-1000 hover:-translate-y-4 hover:shadow-2xl hover:bg-indigo-400">
                                <i className="fas fa-people-carry text-indigo-500 text-5xl mb-3 inline-block transition duration-1000 group-hover:text-white"></i>
                                <h2 className="title-font font-medium text-3xl text-gray-900 transition duration-1000 group-hover:text-white">DOOR</h2>
                                <p className="leading-relaxed transition duration-1000 group-hover:text-white">STEP</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-indigo-200 px-4 py-6 rounded-lg shadow-lg group transform transition duration-1000 hover:-translate-y-4 hover:shadow-2xl hover:bg-indigo-400">
                                <i className="fas fa-sync text-indigo-500 text-5xl mb-3 inline-block transition duration-1000 group-hover:text-white"></i>
                                <h2 className="title-font font-medium text-3xl text-gray-900 transition duration-1000 group-hover:text-white">RETURN</h2>
                                <p className="leading-relaxed transition duration-1000 group-hover:text-white">EASY</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyUs;