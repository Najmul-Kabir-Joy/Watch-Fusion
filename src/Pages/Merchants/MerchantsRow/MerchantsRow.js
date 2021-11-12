import React from 'react';

const MerchantsRow = ({ item, handleUpdate, handleDelete }) => {
    const { name, email, shopName, img, description, status } = item;
    return (
        <tr className="text-black  border-b border-indigo-600">
            <td className="border-l border-r  font-semibold border-indigo-600">{name}</td>
            <td className="border-l border-r  font-semibold border-indigo-600">{email}</td>
            <td className="border-l border-r  font-semibold border-indigo-600">{shopName}</td>
            <td className="border-l border-r  font-semibold border-indigo-600"><img className='block mx-auto w-16 h-16' src={img || ''} alt="" /></td>
            <td className="border-l border-r  font-semibold border-indigo-600 text-indigo-500 uppercase">{description}</td>
            {
                status === 'pending' &&
                <>
                    <td className="border-l border-r  font-semibold border-indigo-600 text-yellow-500 uppercase">{status}</td>
                    <td className="border-l border-r  font-semibold border-indigo-600">
                        <p className='text-green-500 p-1 mb-2 mx-3 border cursor-pointer  border-green-300 hover:bg-green-500 hover:text-white'>accept</p>
                        <p className='text-red-500 p-1 mb-2 mx-3 border cursor-pointer border-red-300 hover:bg-red-500 hover:text-white'>reject</p>
                    </td>

                </>

            }
            {
                status === 'rejected' &&
                <>
                    <td className="border-l border-r  font-semibold border-indigo-600 text-red-500 uppercase">{status}</td>
                    <td className="border-l border-r  font-semibold border-indigo-600">
                        <p className='text-red-500 p-1 cursor-pointer border mx-3 border-red-300 hover:bg-red-500 hover:text-white'>delete</p>
                    </td>

                </>

            }
            {
                status === 'accepted' &&
                <td className="border-l border-r  font-semibold border-indigo-600 text-green-500 uppercase">{status}</td>

            }

            {/* <p className='text-green-500 p-1 mb-2 mx-3 border  border-green-300 hover:bg-green-500 hover:text-white'>accept</p>
                            <p className='text-red-500 p-1 mb-2 mx-3 border  border-red-300 hover:bg-red-500 hover:text-white'>reject</p>
                            <p className='text-red-500 p-1 border mx-3 border-red-300 hover:bg-red-500 hover:text-white'>delete</p> */}

        </tr >
    );
};

export default MerchantsRow;