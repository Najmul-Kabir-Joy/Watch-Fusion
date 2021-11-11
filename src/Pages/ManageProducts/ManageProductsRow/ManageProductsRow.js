import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import UpdateModal from '../../UpdateModal/UpdateModal';

const ManageProductsRow = ({ product, handleDelete }) => {
    const [openBooking, setOpenBooking] = useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    const { _id, productName, brandName, price, discount, img, shopName, time } = product;


    return (
        <>
            <tr className="text-black  border-b border-indigo-600">
                <td className="border-l border-r  font-semibold border-indigo-600 uppercase">{shopName}</td>
                <td className="border-l border-r  font-semibold border-indigo-600 uppercase">{productName}</td>
                <td className="border-l border-r  font-semibold border-indigo-600 uppercase">{brandName}</td>
                <td className="border-l border-r  font-semibold border-indigo-600 uppercase">{price}</td>
                <td className="border-l border-r  font-semibold border-indigo-600 uppercase text-center">
                    <img className='h-14 w-14 mx-auto' src={img} alt="" />
                </td>
                <td className="border-l border-r  font-semibold border-indigo-600 uppercase">{discount}</td>
                <td className="border-l border-r  font-semibold border-indigo-600 uppercase">{time}</td>
                <td className="border-l border-r  font-semibold border-indigo-600">
                    <button onClick={handleBookingOpen} className='bg-transparent mr-3 hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-1 px-2 border border-yellow-500 hover:border-transparent rounded'><i className="fas fa-edit"></i></button>
                    <button onClick={() => handleDelete(_id)} className='bg-transparent mr-3  hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded'><i className="fas fa-trash mr-1"></i>DELETE</button>
                </td>
            </tr >

            {/* MODAL */}
            <UpdateModal
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                id={_id}
            ></UpdateModal>


        </>
    );
};

export default ManageProductsRow;