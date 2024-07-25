import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data";

const ProductSection = () => {
  return (
    <section id="products" className="flex flex-col items-center w-full px-20 pt-8 pb-4 bg-white max-md:px-5 max-md:max-w-full">
      <h2 className="text-3xl font-bold leading-10 text-center text-midnightblue-100 max-md:max-w-full">
        The Power of Our Solutions
      </h2>
      <div className="max-w-full my-12 max-md:mt-10">
        <div className="flex flex-col flex-wrap justify-center gap-5 md:flex-row">
          {products.map((product, index) => (
            <div key={index} className="w-[32%] max-md:w-full">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
