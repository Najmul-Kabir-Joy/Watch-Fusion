import React from 'react';

const MyOrdersRow = () => {
    const status = 'confirm';
    const shipment = 'onboard';
    return (
        <tr className="text-black  border-b border-indigo-600">
            <td className="border-l border-r  font-semibold border-indigo-600">SALA</td>
            <td className="border-l border-r  font-semibold border-indigo-600">DIAMOND WATCH</td>
            <td className="border-l border-r  font-semibold border-indigo-600">5000</td>
            <td className="border-l border-r  font-semibold border-indigo-600">BOGA STORE</td>
            {
                status === 'pending' &&
                <>
                    <td className="border-l border-r text-yellow-500  font-semibold border-indigo-600 uppercase">
                        pending
                    </td>
                    <td className="border-l border-r font-semibold border-indigo-600 uppercase">
                        order not confirmed yet
                    </td>
                    <td className="border-l border-r font-semibold border-indigo-600 uppercase">
                        <button className='bg-transparent mr-3 transition duration-700  hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded'><i className="fas fa-trash mr-1"></i>DELETE</button>
                    </td>
                </>
            }
            {
                status === 'reject' &&
                <>
                    <td className="border-l border-r text-red-500  font-semibold border-indigo-600 uppercase">
                        rejected
                    </td>
                    <td className="border-l border-r font-semibold border-indigo-600 uppercase">
                        order rejected by merchant
                    </td>
                    <td className="border-l border-r font-semibold border-indigo-600 uppercase">
                        <button className='bg-transparent mr-3 transition duration-700  hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded'><i className="fas fa-trash mr-1"></i>DELETE</button>
                    </td>
                </>
            }
            {
                status === 'confirm' &&
                <>
                    <td className="border-l border-r text-green-500  font-semibold border-indigo-600 uppercase">
                        confirmed
                    </td>
                    {
                        shipment === 'process' &&
                        <>
                            <td className="border-l border-r text-yellow-500 font-semibold border-indigo-600 uppercase">
                                processing
                            </td>
                            <td className="border-l border-r font-semibold border-indigo-600 uppercase">
                                <button className='bg-transparent mr-3 transition duration-700  hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded'><i className="fas fa-trash mr-1"></i>DELETE</button>
                            </td>
                        </>
                    }
                    {
                        shipment === 'onboard' &&
                        <>
                            <td className="border-l border-r text-blue-500 font-semibold border-indigo-600 uppercase">
                                on the ship
                            </td>
                            <td className="border-l border-r font-semibold text-red-400 border-indigo-600 uppercase">
                                You can't cancel this order
                            </td>
                        </>
                    }
                    {
                        shipment === 'shipped' &&
                        <>
                            <td className="border-l border-r text-green-500 font-semibold border-indigo-600 uppercase">
                                shipped
                            </td>
                            <td className="border-l border-r text-red-400 font-semibold border-indigo-600 uppercase">
                                You can't cancel this order
                            </td>
                        </>
                    }
                </>
            }
        </tr >
    );
};

export default MyOrdersRow;