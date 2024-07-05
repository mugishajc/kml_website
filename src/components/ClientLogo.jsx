import React from "react";

const ClientLogo = ({ src, alt, className }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className={`h-24 w-24 transition-transform duration-300 transform hover:scale-110 ${className}`}
  />
);

export default ClientLogo;
