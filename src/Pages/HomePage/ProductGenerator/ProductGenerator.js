import React from 'react';
import { Link } from 'react-router-dom';

const ProductGenerator = () => {
    return (
        <>

            <section className='flex justify-center'>
                <section class="lg:w-3/4 p-5 border-2 border-indigo-400 text-center transition transform duration-1000 group hover:-translate-y-2 hover:shadow-2xl hover:bg-indigo-400 cursor-pointer relative">
                    <img class="w-1/2 block mx-auto pt-12" src="https://www.dropbox.com/s/vmtb36poyq3s7go/580b585b2edbce24c47b274a.png?dl=1" alt="" />
                    <h2 class="font-semibold pb-2 text-indigo-400 group-hover:text-white">BRAND</h2>
                    <h1 class="text-3xl mb-2 text-indigo-500 group-hover:text-white">PRODUCT NAME</h1>
                    <h2 class="font-semibold mb-0 text-indigo-600 text-4xl group-hover:text-white">$38.50 </h2>
                    <small className='text-indigo-300'>SHOP:<i> Alia Watches</i></small>
                    <div className='block mx-auto py-5'>
                        <Link
                            to=""
                            className="px-5 py-2 mt-3 text-gray-700 font-medium  transition duration-500 border-2 border-indigo-600 rounded hover:bg-white hover:text-indigo-500 hover:border-indigo-400"
                        >
                            BUY NOW
                        </Link>
                    </div>
                    <div class=" absolute rounded-full transition duration-1000 top-2 right-2 p-2 px-5 font-semibold bg-indigo-600 text-white uppercase group-hover:bg-white group-hover:text-indigo-500">25% Off</div>
                </section>
            </section>
            <section className='flex justify-center'>
                <section class="lg:w-3/4 p-5 border-2 border-indigo-400 text-center transition transform duration-1000 group hover:-translate-y-2 hover:shadow-2xl hover:bg-indigo-400 cursor-pointer relative">
                    <img class="w-1/2 block mx-auto pt-12" src="https://www.dropbox.com/s/vmtb36poyq3s7go/580b585b2edbce24c47b274a.png?dl=1" alt="" />
                    <h2 class="font-semibold pb-2 text-indigo-400 group-hover:text-white">BRAND</h2>
                    <h1 class="text-3xl mb-2 text-indigo-500 group-hover:text-white">PRODUCT NAME</h1>
                    <h2 class="font-semibold mb-0 text-indigo-600 text-4xl group-hover:text-white">$38.50 </h2>
                    <small className='text-indigo-300'>SHOP:<i> Alia Watches</i></small>
                    <div className='block mx-auto py-5'>
                        <Link
                            to=""
                            className="px-5 py-2 mt-3 text-gray-700 font-medium  transition duration-500 border-2 border-indigo-600 rounded hover:bg-white hover:text-indigo-500 hover:border-indigo-400"
                        >
                            BUY NOW
                        </Link>
                    </div>
                    <div class=" absolute rounded-full transition duration-1000 top-2 right-2 p-2 px-5 font-semibold bg-indigo-600 text-white uppercase group-hover:bg-white group-hover:text-indigo-500">25% Off</div>
                </section>
            </section>
            <section className='flex justify-center'>
                <section class="lg:w-3/4 p-5 border-2 border-indigo-400 text-center transition transform duration-1000 group hover:-translate-y-2 hover:shadow-2xl hover:bg-indigo-400 cursor-pointer relative">
                    <img class="w-1/2 block mx-auto pt-12" src="https://www.dropbox.com/s/vmtb36poyq3s7go/580b585b2edbce24c47b274a.png?dl=1" alt="" />
                    <h2 class="font-semibold pb-2 text-indigo-400 group-hover:text-white">BRAND</h2>
                    <h1 class="text-3xl mb-2 text-indigo-500 group-hover:text-white">PRODUCT NAME</h1>
                    <h2 class="font-semibold mb-0 text-indigo-600 text-4xl group-hover:text-white">$38.50 </h2>
                    <small className='text-indigo-300'>SHOP:<i> Alia Watches</i></small>
                    <div className='block mx-auto py-5'>
                        <Link
                            to=""
                            className="px-5 py-2 mt-3 text-gray-700 font-medium  transition duration-500 border-2 border-indigo-600 rounded hover:bg-white hover:text-indigo-500 hover:border-indigo-400"
                        >
                            BUY NOW
                        </Link>
                    </div>
                    <div class=" absolute rounded-full transition duration-1000 top-2 right-2 p-2 px-5 font-semibold bg-indigo-600 text-white uppercase group-hover:bg-white group-hover:text-indigo-500">25% Off</div>
                </section>
            </section>

        </>
    );
};

export default ProductGenerator;