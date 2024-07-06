import React from "react";
import { services } from "../data";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="flex flex-col flex-wrap items-center w-full px-20 pt-8 pb-4 bg-ghostwhite-100 max-md:px-5 max-md:max-w-full"
    >
      <h2 className="text-3xl font-bold leading-10 text-center text-midnightblue-100 max-md:max-w-full">
        Our Services
      </h2>
      <div className="max-w-full my-12 max-md:mt-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all bg-white rounded-lg shadow-md hover:scale-105"
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="object-cover object-top w-full h-52"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                <p className="mb-4 text-sm text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
