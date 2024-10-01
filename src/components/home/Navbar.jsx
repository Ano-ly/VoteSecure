import React from "react";
import logo from "../../../public/Favicon.webp";

const Navbar = () => {
  return (
    <div className="w-full absolute z-40">
      <div className="flex items-center justify-between p-3 px-12 text-white ">
        {/* first section */}
        <div className="flex items-center gap-1 font-extrabold text-ms ">
          <img src={logo} alt="Logo" />
          <p>
            <span className="text-primary_blue">Vote</span>Secure
          </p>
        </div>
        {/* second section lists*/}
        <div className="list-none flex justify-between items-center gap-14 md:gap-20 lg:gap-24     ">
          <li className="">
            <a
              href=""
              className="text-ms text-white text-sm  p-1  border-b-2  border-blue-600 hover:text-white"
            >
              Home
            </a>
          </li>
          <li className="">
            <a
              href=""
              className="text-ms text-white text-sm p-1  border-b-2 border-transparent transition duration-300 hover:border-blue-600"
            >
              Features
            </a>
          </li>
          <li className="">
            <a
              href=""
              className="text-ms text-white text-sm p-1  border-b-2 border-transparent transition duration-300 hover:border-blue-600"
            >
              Pricing
            </a>
          </li>
          <li className="">
            <a
              href=""
              className="text-ms text-white text-sm p-1  border-b-2 border-transparent transition duration-300 hover:border-blue-600"
            >
              AboutUs
            </a>
          </li>
          <li className="">
            <a
              href=""
              className="text-ms text-white  text-sm p-1  border-b-2 border-transparent transition duration-300 hover:border-blue-600"
            >
              Login
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
