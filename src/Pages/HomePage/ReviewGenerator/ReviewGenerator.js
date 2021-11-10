import React from 'react';
import Rating from 'react-rating';

const ReviewGenerator = () => {
    return (
        <div className="flex flex-col p-5 justify-between overflow-hidden text-left border-l-4 border-r-4 border-indigo-400 transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
            <div className="p-5">
                <p className="mb-2 font-bold text-center text-3xl">NAME</p>
                <p className='text-center text-lg pb-2 text-yellow-500'>
                    <Rating
                        initialRating={3}
                        readonly
                        emptySymbol="fa fa-star-o fa"
                        fullSymbol="fa fa-star fa"
                    />
                </p>
                <p className="text-lg leading-5 text-gray-900 h-24 overflow-hidden">
                    Disrupt inspire and think tank, social entrepreneur but
                    preliminary thinking think tank compelling.
                </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        </div>

    );
};

export default ReviewGenerator;