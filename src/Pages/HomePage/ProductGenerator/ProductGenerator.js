import React from 'react';
import { Link } from 'react-router-dom';

const ProductGenerator = ({ product }) => {
    const { _id, productName, brandName, price, discount, img, description } = product

    return (
        <>
            <div className="py-6">
                <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-1000 hover:shadow-2xl hover:-translate-y-4">
                    <div className="w-1/3 bg-cover" style={{ backgroundImage: `url(${img})` }}>
                    </div>
                    <div className="w-2/3 p-4 relative">
                        <h1 className="text-indigo-600 font-bold text-2xl pt-8">{productName}</h1>
                        <h1 className="text-indigo-500 text-sm">Brand: {brandName}</h1>
                        <p className="mt-2 text-gray-600 text-sm h-16 overflow-hidden">{description}</p>
                        <p className='absolute top-0 right-2 rounded-full bg-indigo-400 px-4 py-1 text-white'><span className='text-md'>{discount > 0 ? <> {discount} % Off</> : 'POPULAR'}</span></p>
                        <div className="flex item-center justify-between mt-3">
                            <h1 className="text-indigo-700 font-bold text-xl">${price}</h1>
                            <Link to={`buynow/${_id}`} className="px-3 py-2 hover:bg-indigo-500 hover:text-white border-2 border-indigo-500 text-indigo-500 text-xs font-bold uppercase rounded">Add to Card</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductGenerator;