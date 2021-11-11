import React, { useEffect, useState } from 'react';
import TopNavigation from '../../Shared/Navigation/TopNavigation/TopNavigation';
import { useForm } from "react-hook-form";
import Footer from '../../Shared/Footer/Footer';
import useAuth from '../../Hooks/useAuth';
import { useParams } from 'react-router';
import axios from 'axios';

const BuyNow = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const { displayName, email } = user;

    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, [id])
    const { productName, brandName, price, discount, img, shopName } = product;
    const shipping = 10;
    const total = price - ((price * discount) / 100) + shipping;
    const onSubmit = data => {
        data.price = total;
        data.product = product;
        data.status = 'pending';
        data.shipment = 'order not confirmed yet';
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added');
                    reset();
                }
            })
    };
    return (
        <>
            <TopNavigation />


            <div class="mt-20">
                <h1 class="flex items-center justify-center font-bold text-indigo-600 text-md lg:text-3xl">
                    PURCHASE PAGE
                </h1>
            </div>
            <div class="container p-12 mx-auto">
                <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
                    <div class="flex flex-col md:w-full">
                        <h2 class="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                        </h2>
                        <form class="justify-center w-full mx-auto" onSubmit={handleSubmit(onSubmit)}>
                            <div class="">

                                <div class="mt-4">
                                    <div class="w-full">
                                        <label for="Name"
                                            class="block mb-3 text-sm font-semibold text-gray-500">Name</label>
                                        <input name="Name" type="text" placeholder="Name"
                                            defaultValue={displayName} readOnly
                                            class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" {...register("name", { required: true })} />
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <div class="w-full">
                                        <label for="Email"
                                            class="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                        <input name="email" type="email" placeholder="Email"
                                            defaultValue={email} readOnly
                                            class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" {...register("email", { required: true })} />
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <div class="w-full">
                                        <label for="Phone"
                                            class="block mb-3 text-sm font-semibold text-gray-500">Phone</label>
                                        <input name="phone" type="tel" placeholder="phone"
                                            class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" {...register("phone", { required: true })} />
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <div class="w-full">
                                        <label for="Address"
                                            class="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                        <textarea
                                            class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            name="Address" cols="20" rows="4" placeholder="Address" {...register("address", { required: true })}></textarea>
                                    </div>
                                </div>

                                <div class="mt-4">
                                    <button
                                        class="w-full px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-900">Process</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                        <div class="pt-12 md:pt-0 2xl:ps-4">
                            <h2 class="text-xl font-bold">Order Summary
                            </h2>
                            <div class="mt-8">
                                <div class="flex flex-col space-y-4">
                                    <div class="flex space-x-4">
                                        <div>
                                            <img src={img} alt="productimage"
                                                class="w-40" />
                                        </div>
                                        <div>
                                            <h2 class="text-xl font-bold">{productName}</h2>
                                            <h2 class="text-xl">{brandName}</h2>
                                            <p class="text-sm">{shopName}</p>
                                            <span class="text-red-600">Price</span> ${price}
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div
                                class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Subtotal<span class="ml-2">${price}</span></div>
                            <div
                                class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Discount<span class="ml-2">{discount}%</span></div>
                            <div
                                class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Shipping Tax<span class="ml-2">$10</span></div>
                            <div
                                class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Total<span class="ml-2">${total}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default BuyNow;