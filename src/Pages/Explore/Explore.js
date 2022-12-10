import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import TopNavigation from "../../Shared/Navigation/TopNavigation/TopNavigation";
import Spinner from "../../Shared/Spinner/Spinner";
import ProductGenerator from "../HomePage/ProductGenerator/ProductGenerator";

const Explore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://watch-fusion-server-production.up.railway.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <>
      <TopNavigation />
      <section className="container mx-auto">
        <div className="my-5 text-center">
          <h1 className="text-5xl border-b-4 transition duration-1000 hover:border-indigo-400 inline">
            TRENDING PRODUCTS
          </h1>
        </div>
        <div>
          {products.length ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 py-10 gap-10 container mx-auto ">
              {products.map((product) => (
                <ProductGenerator
                  key={product._id}
                  product={product}
                ></ProductGenerator>
              ))}
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Explore;
