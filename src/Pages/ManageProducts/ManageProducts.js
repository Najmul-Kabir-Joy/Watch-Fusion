import React from 'react';
import ManageProductsRow from './ManageProductsRow/ManageProductsRow';

const ManageProducts = () => {
    return (
        <div className='min-w-full' >
            <h2 className='text-center text-3xl py-10'>MY ORDERS PAGE</h2>
            <section className="p-0 lg:px-20">
                <div className="w-full mb-8 overflow-hidden pb-64">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="text-md font-semibold bg-indigo-300 text-center tracking-wide text-gray-900 uppercase border-b border-indigo-600">
                                    <th className="px-4 py-3 border">SHOPNAME</th>
                                    <th className="px-4 py-3 border">PRODUCT NAME</th>
                                    <th className="px-4 py-3 border">BRAND NAME</th>
                                    <th className="px-4 py-3 border">PRICE</th>
                                    <th className="px-4 py-3 border">PRODUCT IMAGE</th>
                                    <th className="px-4 py-3 border">DISCOUNT</th>
                                    <th className="px-4 py-3 border">ADD DATE</th>
                                    <th className="px-4 py-3 border">ACTION</th>

                                </tr>
                            </thead>
                            <tbody className="bg-white text-center">
                                <ManageProductsRow />
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManageProducts;