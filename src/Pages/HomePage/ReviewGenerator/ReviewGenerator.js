import React from 'react';
import Rating from 'react-rating';

const ReviewGenerator = ({ item }) => {
    const { name, rating, message, img } = item;
    return (
        <div className='lg:px-10 px-0 shadow-2xl py-2'>
            <div className="flex flex-col p-5 justify-between overflow-hidden text-left border-l-4 border-r-4 border-indigo-400 transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="">
                    <img className="block mx-auto object-cover w-16 h-16 rounded-full" src={img ? img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png'} alt="avatar" />
                    <p className="mb-2 font-bold text-center text-3xl">{name.split(' ')[1] ? name.split(' ')[1] : name.split(' ')[0]}</p>
                    <p className='text-center text-lg pb-2 text-yellow-500'>
                        <Rating
                            initialRating={rating}
                            readonly
                            emptySymbol="fa fa-star-o fa"
                            fullSymbol="fa fa-star fa"
                        />
                    </p>
                    <p className="text-lg leading-5 text-gray-900 h-20 text-justify overflow-hidden">
                        {message.slice(0, 100)}
                    </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
        </div>


    );
};

export default ReviewGenerator;