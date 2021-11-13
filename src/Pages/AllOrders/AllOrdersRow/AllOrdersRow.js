import React from 'react';

const AllOrdersRow = ({ item, handleDelete, handleUpdate, index }) => {
    const { _id, name, email, phone, address, price, time, product, status, shipment } = item;
    const { productName } = product
    return (
        <>
            {
                status === 'rejected' ?
                    <tr className="text-black  border-b border-indigo-600  bg-red-500" >
                        <td className="border-l border-r  font-semibold border-indigo-600 uppercase">{index}</td>

                        <td className="border-l border-r  text-left pl-2 font-semibold border-indigo-600 uppercase">
                            <p>{name}</p>
                            <p>{email}</p>
                            <p>{phone}</p>
                        </td>
                        <td className="border-l border-r  font-semibold border-indigo-600 uppercase">{time}</td>
                        <td className="border-l border-r  font-semibold border-indigo-600 uppercase">{address}</td>
                        <td className="border-l border-r  font-semibold border-indigo-600 uppercase">{productName}</td>
                        <td className="border-l border-r  font-semibold border-indigo-600 uppercase">{price}</td>
                        <td className="border-l border-r  font-semibold border-indigo-600 uppercase">{status}</td>
                        <td className="border-l border-r  font-semibold border-indigo-600 uppercase">{shipment}</td>
                        <td className="border-l border-r  font-semibold border-indigo-600 uppercase py-3">
                            <p onClick={() => handleDelete(_id)} className='text-white p-1 border mx-3 border-red-300 hover:bg-white hover:text-red-400'>delete</p>
                        </td>
                        <td className="border-l border-r  font-semibold border-indigo-600 uppercase py-3">
                            <p>not applicable</p>
                        </td>
                    </tr >
                    :
                    <tr className="text-black  border-b border-indigo-600" >
                        <td className="border-l border-r  font-semibold border-indigo-600 uppercase">{index}</td>

                        <td className="border-l border-r  text-left pl-2 font-semibold border-indigo-600 uppercase">
                            <p>{name}</p>
                            <p><i className="fas fa-envelope"></i>{email}</p>
                            <p><i className="fas fa-phone-alt"></i> {phone}</p>
                        </td>
                        <td className="border-l border-r  font-semibold border-indigo-600 uppercase">{time}</td>
                        <td className="border-l border-r  font-semibold border-indigo-600 uppercase">{address}</td>
                        <td className="border-l border-r  font-semibold border-indigo-600 uppercase">{productName}</td>
                        <td className="border-l border-r  font-semibold border-indigo-600 uppercase">{price}</td>
                        <td className="border-l border-r  font-semibold border-indigo-600 uppercase text-indigo-500">{status}</td>
                        <td className="border-l border-r  font-semibold border-indigo-600 uppercase text-indigo-500">{shipment}</td>
                        <td className="border-l border-r  font-semibold border-indigo-600 uppercase py-3">
                            {
                                status === 'pending' ?
                                    <>
                                        <p onClick={() => handleUpdate(_id, 'accepted', shipment)} className='cursor-pointer text-green-500 p-1 mb-2 mx-3 border  border-green-300 hover:bg-green-500 hover:text-white'>accept</p>
                                        <p onClick={() => handleUpdate(_id, 'rejected', shipment)} className='cursor-pointer text-red-500 p-1 mb-2 mx-3 border  border-red-300 hover:bg-red-500 hover:text-white'>reject</p>
                                    </>
                                    :
                                    <p onClick={() => handleDelete(_id)} className='cursor-pointer text-red-500 p-1 border mx-3 border-red-300 hover:bg-red-500 hover:text-white'>delete</p>

                            }
                            {/* <p className='text-green-500 p-1 mb-2 mx-3 border  border-green-300 hover:bg-green-500 hover:text-white'>accept</p>
                            <p className='text-red-500 p-1 mb-2 mx-3 border  border-red-300 hover:bg-red-500 hover:text-white'>reject</p>
                            <p className='text-red-500 p-1 border mx-3 border-red-300 hover:bg-red-500 hover:text-white'>delete</p> */}
                        </td>
                        <td className="border-l border-r  font-semibold border-indigo-600 uppercase py-3">
                            {
                                status === 'accepted' ?
                                    <>
                                        {
                                            shipment === 'order not confirmed yet' ?
                                                <p onClick={() => handleUpdate(_id, status, 'processing')} className='cursor-pointer text-yellow-500 p-1 mx-3 border  border-yellow-300 hover:bg-yellow-500 hover:text-white'>processing</p>
                                                :
                                                null
                                        }
                                        {
                                            shipment === 'processing' ?
                                                <p onClick={() => handleUpdate(_id, status, 'on ship')} className='cursor-pointer text-blue-500 p-1  mx-3 border  border-blue-300 hover:bg-blue-500 hover:text-white'>on ship</p>
                                                : null
                                        }
                                        {
                                            shipment === 'on ship' ?
                                                <p onClick={() => handleUpdate(_id, status, 'shipped')} className='cursor-pointer text-green-500 p-1 border mx-3 border-green-300 hover:bg-green-500 hover:text-white'>shipped</p>
                                                : null
                                        }
                                        {
                                            shipment === 'shipped' ?
                                                <p className='text-green-500'>ORDER SHIPPED</p>
                                                :
                                                null
                                        }

                                    </>
                                    :
                                    <p>ORDER NOT ACCEPTED</p>
                            }
                            {/* <p className='text-yellow-500 p-1 mb-2 mx-3 border  border-yellow-300 hover:bg-yellow-500 hover:text-white'>processing</p>
                            <p className='text-blue-500 p-1 mb-2 mx-3 border  border-blue-300 hover:bg-blue-500 hover:text-white'>on ship</p>
                            <p className='text-green-500 p-1 border mx-3 border-green-300 hover:bg-green-500 hover:text-white'>shipped</p> */}

                        </td>
                    </tr >
            }
        </>
    );
};

export default AllOrdersRow;