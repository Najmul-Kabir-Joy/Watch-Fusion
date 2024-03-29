import axios from "axios";
import React, { useEffect, useState } from "react";
import ManageProductsRow from "./ManageProductsRow/ManageProductsRow";
import { toast, ToastContainer } from "react-toastify";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://watch-fusion-server-production.up.railway.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleDelete = (id) => {
    const approve = window.confirm("You really want to delete?");
    if (approve) {
      const url = `https://watch-fusion-server-production.up.railway.app/products/${id}`;
      axios.delete(url).then((res) => {
        if (res.data.deletedCount > 0) {
          toast("✅ DELETED", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          const remains = products.filter((item) => item._id !== id);
          setProducts(remains);
        }
      });
    }
  };
  return (
    <div className="min-w-full pt-12 px-2">
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
      <h2 className="text-center text-3xl py-10">MANAGE PRODUCTS</h2>
      <section className="p-0 lg:px-20">
        <div className="w-full mb-8 overflow-hidden pb-64">
          <div className="w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-md font-semibold bg-indigo-300 text-center tracking-wide text-gray-900 uppercase border-b border-indigo-600">
                  <th className="px-4 py-3 border">PRODUCT NAME</th>
                  <th className="px-4 py-3 border">BRAND NAME</th>
                  <th className="px-4 py-3 border">PRICE</th>
                  <th className="px-4 py-3 border">PRODUCT IMAGE</th>
                  <th className="px-4 py-3 border">DESCRIPTION</th>
                  <th className="px-4 py-3 border">DISCOUNT</th>
                  <th className="px-4 py-3 border">ADDED ON</th>
                  <th className="px-4 py-3 border">ACTION</th>
                </tr>
              </thead>
              <tbody className="bg-white text-center">
                {products.map((product) => (
                  <ManageProductsRow
                    key={product._id}
                    product={product}
                    handleDelete={handleDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageProducts;
