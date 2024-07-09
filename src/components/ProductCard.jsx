import React from "react";

const ProductCard = ({ imageSrc, title, description, link }) => (
  <div className="h-[300px] flex flex-col items-center self-stretch justify-center w-full py-8 transition-all duration-300 bg-white border rounded-lg shadow-sm group hover:bg-primary grow px-7 max-md:px-5 max-md:mt-6 hover:shadow-lg border-gainsboro">
    <img
      loading="lazy"
      src={imageSrc}
      alt={title}
      className="group-hover:scale-110 max-w-full aspect-[1.37] w-[135px] transition-transform duration-300 transform hover:scale-105"
    />
    <h3 className="text-xl font-bold leading-8 mt-7 text-midnightblue-100">
      {title}
    </h3>
    <p className="self-stretch mt-8 text-base leading-6 text-center group-hover:hidden text-dimgray">
      {description}
    </p>
    <a href={link} target="_blank" className="items-center justify-center hidden gap-2 py-3 mt-5 text-base font-medium text-center text-white transition-all duration-300 rounded bg-midnightblue-100 font-lexend-deca text-midnight-blue-200 group-hover:inline md:mt-12 hover:bg-midnightblue-200 px-7 hover:scale-105 max-md:px-5">
      View More
    </a>
  </div>
);

export default ProductCard;
