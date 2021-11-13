import React from 'react';
import Rating from 'react-rating';

const ManageReviewsRow = ({ index, item, handleDelete }) => {
    return (
        <tr className="text-black  border-b border-indigo-600" >
            <td className="border-l border-r  font-semibold border-indigo-600 uppercase">{index}</td>
            <td className="border-l border-r  font-semibold border-indigo-600 uppercase">{item.name}</td>
            <td className="border-l border-r  font-semibold border-indigo-600 uppercase">
                <Rating
                    initialRating={item.rating}
                    readonly
                    emptySymbol="fa fa-star-o fa"
                    fullSymbol="fa fa-star fa"
                    className='text-yellow-500'
                /></td>
            <td className="border-l border-r  font-semibold border-indigo-600 uppercase"><p>{item.message.slice(0, 100)}</p></td>

            <td className="border-l border-r  font-semibold border-indigo-600 uppercase py-3">
                <p onClick={() => handleDelete(item._id)} className='cursor-pointer text-red-500 p-1 border mx-3 border-red-300 hover:bg-red-500 hover:text-white'>delete</p>
            </td>
        </tr >
    );
};

export default ManageReviewsRow;