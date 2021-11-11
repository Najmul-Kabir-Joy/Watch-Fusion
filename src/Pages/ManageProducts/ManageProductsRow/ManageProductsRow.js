import React from 'react';
import { Link } from 'react-router-dom';

const ManageProductsRow = () => {
    return (
        <tr className="text-black  border-b border-indigo-600">
            <td className="border-l border-r  font-semibold border-indigo-600 uppercase">AliaShop</td>
            <td className="border-l border-r  font-semibold border-indigo-600 uppercase">DIAMOND WATCH</td>
            <td className="border-l border-r  font-semibold border-indigo-600 uppercase">Roice</td>
            <td className="border-l border-r  font-semibold border-indigo-600 uppercase">5000</td>
            <td className="border-l border-r  font-semibold border-indigo-600 uppercase text-center">
                <img className='h-14 w-14 mx-auto' src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </td>
            <td className="border-l border-r  font-semibold border-indigo-600 uppercase">0</td>
            <td className="border-l border-r  font-semibold border-indigo-600 uppercase">11/12/21</td>
            <td className="border-l border-r  font-semibold border-indigo-600">
                <Link to={`/bookinglist/${1}`}><button className='bg-transparent mr-3 hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-1 px-2 border border-yellow-500 hover:border-transparent rounded'><i className="fas fa-edit"></i></button></Link>
                <button className='bg-transparent mr-3  hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded'><i className="fas fa-trash mr-1"></i>DELETE</button>
            </td>


        </tr >
    );
};

export default ManageProductsRow;