import React from 'react';
import { useForm } from "react-hook-form";

const BecomeMerchant = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset();
    };
    return (
        <div className='container mx-auto'>
            <div>
                <p className='text-3xl text-center pt-5'>WANT TO BECOME A SHOP OWNER?</p>
                <p className='text-xl text-center pt-5'>FILL THE FORM GIVEN BELOW</p>
            </div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                                        <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  {...register("name", { required: true })} />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                                        <input type="tel" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  {...register("phone", { required: true })} />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="shopname" className="leading-7 text-sm text-gray-600">Shop Name</label>
                                        <input type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  {...register("shopName", { required: true })} />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="nid" className="leading-7 text-sm text-gray-600">NID number</label>
                                        <input type="number" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  {...register("nid", { required: true })} />
                                    </div>
                                </div>

                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label for="description" className="leading-7 text-sm text-gray-600">Description</label>
                                        <textarea className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"  {...register("description", { required: true })}></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">REQUEST OWNERSHIP</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BecomeMerchant;