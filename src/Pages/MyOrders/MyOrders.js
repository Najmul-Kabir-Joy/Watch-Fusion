import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import MyOrdersRow from "./MyOrdersRow/MyOrdersRow";
import { toast, ToastContainer } from "react-toastify";

const MyOrders = () => {
  const { user, token } = useAuth();
  const email = user.email;
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url = `https://watch-fusion-server-production.up.railway.app/myorders?email=${email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [email, token]);

  const handleDelete = (id) => {
    const approve = window.confirm("You really want to delete?");
    if (approve) {
      const url = `https://watch-fusion-server-production.up.railway.app/orders/${id}`;
      axios.delete(url).then((res) => {
        toast("✅ ORDER DELETED SUCCESSFULLY", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        if (res.data.deletedCount > 0) {
          const remains = items.filter((item) => item._id !== id);
          setItems(remains);
        }
      });
    }
  };

  return (
    <div className="min-w-full pt-16 px-2">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h2 className="text-center text-3xl py-10">MY ORDERS PAGE</h2>
      <section className="p-0 lg:px-20">
        <div className="w-full mb-8 overflow-hidden pb-64">
          <div className="w-full overflow-x-auto">
            {items.length ? (
              <table className="w-full table-auto">
                <thead>
                  <tr className="text-md font-semibold bg-indigo-300 text-center tracking-wide text-gray-900 uppercase border-b border-indigo-600">
                    <th className="px-4 py-3 border">#</th>
                    <th className="px-4 py-3 border">DATE</th>
                    <th className="px-4 py-3 border">PRODUCT</th>
                    <th className="px-4 py-3 border">BILL</th>
                    <th className="px-4 py-3 border">ORDER STATUS</th>
                    <th className="px-4 py-3 border">SHIPPING STATUS</th>
                    <th className="px-4 py-3 border">ACTION</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-center">
                  {items.map((item, index) => (
                    <MyOrdersRow
                      key={item._id}
                      index={index + 1}
                      item={item}
                      handleDelete={handleDelete}
                    />
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center text-red-400 text-xl">
                YOU DON'T HAVE ANY ORDERS
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyOrders;
