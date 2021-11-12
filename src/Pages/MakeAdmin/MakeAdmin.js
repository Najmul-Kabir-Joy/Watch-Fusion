import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        axios.put('http://localhost:5000/users/admin', data)
            .then(res => {
                if (res.data.modifiedCount) {
                    alert('done')
                    reset();
                }
            });
    };
    return (
        <div className='py-16'>
            <h2 className='text-3xl text-center uppercase mb-5'>make admin</h2>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="text" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  {...register("email", { required: true })} />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">MAKE ADMIN</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;