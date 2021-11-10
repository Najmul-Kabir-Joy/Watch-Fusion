import React from 'react';
import ProductGenerator from '../ProductGenerator/ProductGenerator';

const TrendingProducts = () => {
    return (
        <section className='container mx-auto'>
            <div className='my-5 text-center'>
                <h1 className='text-5xl border-b-4 transition duration-1000 hover:border-indigo-400 inline'>TRENDING PRODUCTS</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 py-10 gap-10 container mx-auto '>
                <ProductGenerator />
            </div>
        </section>
    );
};

export default TrendingProducts;