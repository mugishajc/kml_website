import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full pt-12 bg-ghostwhite-100 text-dimgray">
      <div className="w-full max-w-screen-xl px-5">
        <div className="flex flex-col items-center gap-10 mb-10 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-midnightblue-100">
              KML Innovate Ltd
            </h3>
            <p className="mt-2 text-base leading-6">
              We believe in treating our customers with respect and faith.
            </p>
          </div>
          <div id="contact" className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-midnightblue-100">
              Contact Us
            </h3>
            <p className="mt-2 text-base leading-6">
              <a href="mailto:info@KML Innovate.com" className="hover:underline">
               Email:  kageseraxavier@gmail.com
              </a>
              <br />
             Phone Number: +1 (937) 977-5233
              <br />
             Phone Number: +250 788 423 292
              <br />
              Rwanda-Kigali-Nyarugenge
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-midnightblue-100">
              Quick Links
            </h3>
            <ul className="mt-2 space-y-1 text-base leading-6">
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#team" className="hover:underline">
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full py-4 text-sm text-center text-dimgray">
        &copy; {new Date().getFullYear()} KML Innovate Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
