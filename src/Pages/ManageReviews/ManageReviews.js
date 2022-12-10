import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../../Shared/Spinner/Spinner";
import ManageReviewsRow from "./ManageReviewsRow/ManageReviewsRow";

const ManageReviews = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://watch-fusion-server-production.up.railway.app/reviews")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  const handleDelete = (id) => {
    const approve = window.confirm("You really want to delete?");
    if (approve) {
      const url = `https://watch-fusion-server-production.up.railway.app/reviews/${id}`;
      axios.delete(url).then((res) => {
        if (res.data.deletedCount > 0) {
          toast("✅ DELETION SUCCESSFULL", {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          const remains = items.filter((item) => item._id !== id);
          setItems(remains);
        }
      });
    }
  };
  return (
    <div className="min-w-full pt-8 px-2">
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
      <h2 className="text-center text-3xl py-10">MANAGE REVIEWS</h2>
      <section className="p-0 lg:px-20">
        <div className="w-full mb-8 overflow-hidden">
          <div className="w-full overflow-x-auto">
            {items.length ? (
              <table className="w-full table-auto">
                <thead>
                  <tr className="text-md font-semibold bg-indigo-300 text-center tracking-wide text-gray-900 uppercase border-b border-indigo-600">
                    <th className="px-4 py-3 border">#</th>
                    <th className="px-4 py-3 border">NAME</th>
                    <th className="px-4 py-3 border">RATING</th>
                    <th className="px-4 py-3 border">TEXT</th>
                    <th className="px-4 py-3 border">ACTION</th>
                  </tr>
                </thead>

                <tbody className="bg-white text-center">
                  {items.map((item, index) => (
                    <ManageReviewsRow
                      key={item._id}
                      index={index}
                      item={item}
                      handleDelete={handleDelete}
                    />
                  ))}
                </tbody>
              </table>
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageReviews;
