import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

const UpdateProduct = () => {
  const { id } = useParams();
  const { reset } = useForm();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(
      `https://watch-fusion-server-production.up.railway.app/products/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  const productName = (e) => {
    const updatedProduct = { ...product };
    updatedProduct.productName = e.target.value;
    setProduct(updatedProduct);
  };
  const brandName = (e) => {
    const updatedProduct = { ...product };
    updatedProduct.brandName = e.target.value;
    setProduct(updatedProduct);
  };
  const price = (e) => {
    const updatedProduct = { ...product };
    updatedProduct.price = e.target.value;
    setProduct(updatedProduct);
  };
  const discount = (e) => {
    const updatedProduct = { ...product };
    updatedProduct.discount = e.target.value;
    setProduct(updatedProduct);
  };
  const img = (e) => {
    const updatedProduct = { ...product };
    updatedProduct.img = e.target.value;
    setProduct(updatedProduct);
  };
  const shopName = (e) => {
    const updatedProduct = { ...product };
    updatedProduct.shopName = e.target.value;
    setProduct(updatedProduct);
  };
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="container mx-auto">
      <div className="pt-16">
        <img className="block mx-auto h-20 w-20" src={product.img} alt="" />
        <p className="text-3xl text-center pt-5">
          UPDATE {product.productName}
        </p>
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={onSubmit}>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="pname"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onChange={productName}
                      value={product.productName || ""}
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="bname"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Brand Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onChange={brandName}
                      value={product.brandName || ""}
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="price"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Product Price
                    </label>
                    <input
                      type="number"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onChange={price}
                      value={product.price || ""}
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="discount"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Discount
                    </label>
                    <input
                      type="number"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onChange={discount}
                      value={product.discount || ""}
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="image"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Product Image
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onChange={img}
                      value={product.img || ""}
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="sname"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Shop Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onChange={shopName}
                      value={product.shopName || ""}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    UPDATE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateProduct;
