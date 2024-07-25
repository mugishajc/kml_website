import React from "react";
import { clientLogos } from "../data";
import ClientLogo from "./ClientLogo";

const ClientLogoSection = () => {
  return (
    <section className="z-10 flex items-center self-center justify-center max-w-full px-16 py-12 mx-auto my-5 rounded-2xl bg-slate-50 max-md:px-5">
      <div className="flex flex-col w-10/12 max-w-full">
        <h2 className="self-center text-3xl font-bold leading-10 text-center text-midnightblue-100">
        Digital Dreams Real solutions
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-5 mx-auto mt-10 max-md:max-w-full">
          {clientLogos.map((logo, index) => (
            <ClientLogo key={index} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogoSection;
