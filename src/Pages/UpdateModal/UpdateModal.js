import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UpdateModal = ({ openBooking, handleBookingClose, id }) => {
    const { reset } = useForm();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [id])
    const productName = e => {
        const updatedProduct = { ...product };
        updatedProduct.productName = e.target.value;
        setProduct(updatedProduct);
    };
    const brandName = e => {
        const updatedProduct = { ...product };
        updatedProduct.brandName = e.target.value;
        setProduct(updatedProduct);
    };
    const price = e => {
        const updatedProduct = { ...product };
        updatedProduct.price = e.target.value;
        setProduct(updatedProduct);
    };
    const discount = e => {
        const updatedProduct = { ...product };
        updatedProduct.discount = e.target.value;
        setProduct(updatedProduct);
    };
    const img = e => {
        const updatedProduct = { ...product };
        updatedProduct.img = e.target.value;
        setProduct(updatedProduct);
    };
    const shopName = e => {
        const updatedProduct = { ...product };
        updatedProduct.shopName = e.target.value;
        setProduct(updatedProduct);
    };
    const handleUpdate = e => {
        const url = `http://localhost:5000/products/${id}`
        axios.put(url, product)
            .then(res => {
                if (res.data.modifiedCount) {
                    alert('done')
                    reset();
                    handleBookingClose();
                }
            });
        // e.preventDefault();
    }

    return (
        <>
            {openBooking ? <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <img className='block mx-auto h-20 w-20' src={product.img} alt="" />
                                    <h3 className="text-lg leading-6 font-medium text-gray-900 text-center" id="modal-title">
                                        Update {product.productName}
                                    </h3>
                                    <form onSubmit={handleUpdate}>
                                        <div className="flex flex-wrap -m-2">
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label for="pname" className="leading-7 text-sm text-gray-600">Product Name</label>
                                                    <input type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                        onChange={productName} value={product.productName || ''}
                                                    />
                                                </div>
                                            </div>
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label for="bname" className="leading-7 text-sm text-gray-600">Brand Name</label>
                                                    <input type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                        onChange={brandName} value={product.brandName || ''}
                                                    />
                                                </div>
                                            </div>
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label for="price" className="leading-7 text-sm text-gray-600">Product Price</label>
                                                    <input type="number" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                        onChange={price} value={product.price || ''}
                                                    />
                                                </div>
                                            </div>
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label for="discount" className="leading-7 text-sm text-gray-600">Discount</label>
                                                    <input type="number" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                        onChange={discount} value={product.discount || ''}
                                                    />
                                                </div>
                                            </div>
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label for="image" className="leading-7 text-sm text-gray-600">Product Image</label>
                                                    <input type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                        onChange={img} value={product.img || ''}
                                                    />
                                                </div>
                                            </div>
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label for="sname" className="leading-7 text-sm text-gray-600">Shop Name</label>
                                                    <input type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                        onChange={shopName} value={product.shopName || ''}
                                                    />
                                                </div>
                                            </div>


                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                            <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                                update
                                            </button>
                                            <button onClick={() => handleBookingClose()} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div> : null}
        </>
    );
};

export default UpdateModal;