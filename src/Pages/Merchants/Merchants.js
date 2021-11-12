import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MerchantsRow from './MerchantsRow/MerchantsRow';

const Merchants = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/merchant')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    const handleDelete = (id) => {
        const approve = window.confirm('You really want to delete?')
        if (approve) {
            const url = `http://localhost:5000/orders/${id}`;
            axios.delete(url)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const remains = items.filter(item => item._id !== id);
                        setItems(remains);
                    }
                })
        }
    }
    const handleUpdate = (id, status, shipment) => {
        const url = `http://localhost:5000/orders/${id}`
        let data = {};
        data.status = status;
        data.shipment = shipment;
        axios.put(url, data)
            .then(res => {
                if (res.data.modifiedCount) {
                    alert('done')
                    window.location.reload();
                }
            });
    }
    return (
        <div className='min-w-full' >
            <h2 className='text-center text-3xl py-10'>MY ORDERS PAGE</h2>
            <section className="p-0 lg:px-20">
                <div className="w-full mb-8 overflow-hidden pb-64">
                    <div className="w-full overflow-x-auto">
                        {items.length ?
                            <table className="w-full table-auto">
                                <thead>
                                    <tr className="text-md font-semibold bg-indigo-300 text-center tracking-wide text-gray-900 uppercase border-b border-indigo-600">
                                        <th className="px-4 py-3 border">NAME</th>
                                        <th className="px-4 py-3 border">EMAIL</th>
                                        <th className="px-4 py-3 border">SHOPNAME</th>
                                        <th className="px-4 py-3 border">SHOP BANNER</th>
                                        <th className="px-4 py-3 border">DESCRIPTION</th>
                                        <th className="px-4 py-3 border">STATUS</th>
                                        <th className="px-4 py-3 border">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white text-center">
                                    {
                                        items.map(item => <MerchantsRow key={item._id} item={item} handleDelete={handleDelete} handleUpdate={handleUpdate} />)
                                    }
                                </tbody>
                            </table>
                            :
                            <p className='text-center text-red-400 text-xl'>YOU DON'T HAVE ANY ORDERS</p>
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Merchants;