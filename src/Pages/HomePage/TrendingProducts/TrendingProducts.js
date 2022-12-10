import React, { useEffect, useState } from "react";
import Spinner from "../../../Shared/Spinner/Spinner";
import ProductGenerator from "../ProductGenerator/ProductGenerator";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://watch-fusion-server-production.up.railway.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <section className="container mx-auto">
      <div className="my-5 text-center">
        <h1 className="text-5xl border-b-4 transition duration-1000 hover:border-indigo-400 inline">
          TRENDING PRODUCTS
        </h1>
      </div>
      {products.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 py-10 gap-10 container mx-auto ">
          {products.slice(0, 6).map((product) => (
            <ProductGenerator
              key={product._id}
              product={product}
            ></ProductGenerator>
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </section>
  );
};

export default TrendingProducts;
