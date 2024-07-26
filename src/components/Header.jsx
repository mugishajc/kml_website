import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full shadow-md bg-primary">
      <div className="flex items-center justify-center max-w-screen-xl px-6 py-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between w-full gap-5">
          <div className="cursor-pointer flex flex-row items-center justify-center relative gap-[0.5rem]">
            <div className="h-[2.125rem] w-[2.125rem] rounded-8xs bg-white overflow-hidden shrink-0" />
            <img
              className="h-[1.125rem] w-[1.125rem] absolute !m-[0] top-[0.5rem] left-[0.5rem] object-contain z-[1]"
              alt=""
              src="/icon.svg"
            />
            <a href="/" className="text-lg  font-bold">
              KML Innovate
            </a>
          </div>
          <nav className="items-center hidden text-base font-medium md:flex gap-7">
            <a
              href="/"
              className="transition-all  cursor-pointer hover:scale-105"
            >
              Home
            </a>
            <a
              href="#about"
              className="transition-all cursor-pointer hover:scale-105"
            >
              About Us
            </a>
            <a
              href="#products"
              className="transition-all cursor-pointer hover:scale-105"
            >
             Solutions 
            </a>
            <a
              href="#services"
              className="transition-all  cursor-pointer hover:scale-105"
            >
              Services
            </a>
            <a
              href="#team"
              className="transition-all  cursor-pointer hover:scale-105"
            >
              Team
            </a>
          </nav>
          <div className="items-center hidden gap-5 md:flex">
            <a
              href="#contact"
              className="text-[1rem] leading-[1.625rem] font-medium px-4 py-2 text-white transition-colors duration-300 rounded bg-midnightblue-100 hover:bg-darkslateblue hover:scale-105"
            >
              Contact Us
            </a>
          </div>
          <button
            className="flex items-center md:hidden"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="px-6 py-4 bg-white border-y-[1px] border-slate-300 md:hidden ">
          <a
            href="/"
            onClick={closeMobileMenu}
            className="block mb-2 transition-all cursor-pointer hover:scale-105"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={closeMobileMenu}
            className="block mb-2 transition-all cursor-pointer hover:scale-105"
          >
            About Us
          </a>
          <a
            href="#products"
            onClick={closeMobileMenu}
            className="block mb-2 transition-all cursor-pointer hover:scale-105"
          >
            Products
          </a>
          <a
            href="#services"
            onClick={closeMobileMenu}
            className="block mb-2 transition-all cursor-pointer hover:scale-105"
          >
            Services
          </a>
          <a
            href="#team"
            onClick={closeMobileMenu}
            className="block mb-2 transition-all cursor-pointer hover:scale-105"
          >
            Team
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
