import React from 'react';

const MyOrdersRow = ({ item, handleDelete, index }) => {
    const { _id, time, product, price, status, shipment } = item;
    return (
        <tr className="text-black  border-b border-indigo-600">
            <td className="border-l border-r  font-semibold border-indigo-600">{index}</td>
            <td className="border-l border-r  font-semibold border-indigo-600">{time}</td>
            <td className="border-l border-r  font-semibold border-indigo-600">{product.productName}</td>
            <td className="border-l border-r  font-semibold border-indigo-600">{price}</td>
            <td className="border-l border-r  font-semibold border-indigo-600">{product.shopName}</td>
            <td className="border-l border-r  font-semibold border-indigo-600 text-indigo-500 uppercase">{status}</td>
            <td className="border-l border-r  font-semibold border-indigo-600 text-indigo-500 uppercase">{shipment}</td>
            {
                shipment === 'on ship' || shipment === 'shipped' ?
                    <td className="border-l border-r  font-semibold border-indigo-600 text-red-500 uppercase">You can't delete</td>
                    :
                    <td className="border-l border-r  font-semibold border-indigo-600 text-red-500 uppercase">
                        <p className='cursor-pointer' onClick={() => handleDelete(_id)}>DELETE</p>
                    </td>

            }

        </tr >
    );
};

export default MyOrdersRow;