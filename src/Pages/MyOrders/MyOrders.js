import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Spinner from '../../Shared/Spinner/Spinner';
import MyOrdersRow from './MyOrdersRow/MyOrdersRow';
const MyOrders = () => {
    const { user } = useAuth();
    const email = user.email;
    const [items, setItems] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${email}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [email])
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
                                        <th className="px-4 py-3 border">DATE</th>
                                        <th className="px-4 py-3 border">PRODUCT</th>
                                        <th className="px-4 py-3 border">BILL</th>
                                        <th className="px-4 py-3 border">SHOP NAME</th>
                                        <th className="px-4 py-3 border">ORDER STATUS</th>
                                        <th className="px-4 py-3 border">SHIPPING STATUS</th>
                                        <th className="px-4 py-3 border">ACTION</th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white text-center">
                                    {
                                        items.map(item => <MyOrdersRow key={item._id} item={item} handleDelete={handleDelete} />)
                                    }
                                </tbody>
                            </table>
                            :
                            <Spinner />
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyOrders;