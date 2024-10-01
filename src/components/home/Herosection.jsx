import React from "react";
import logo from "../../../public/assets/Biometric.png";
import votingsteps from "../../../public/assets/votingsteps.png";
import bgdots from "../../../public/assets/bgdots.png";

const Herosection = () => {
  // YET TO DO RESPONSIVENESS
  return (
    <div className=" pt-20 flex flex-col items-center text-center text-white z-40 w-screen">
      {/* maintitle */}
      <div className="text-3xl md:text-5xl font-bold pt-1 mb-2 relative">
        <h1 className="max-w-4xl relative leading-snug">
          <img
            src={logo}
            alt=""
            className=" inline-block  md:w-12 md:bottom-16 md:left-3 md:absolute"
          />
          Blockchain-Powered Voting for Unmatched Security and Transparency
        </h1>
        <div className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={bgdots} alt="" className="" />
        </div>
      </div>
      {/* subtitle */}
      <div>
        <p className="text-base max-w-xl mb-4">
          VoteSecure ensures elections are secure and tamper-proof with
          blockchain technology. Every vote is encrypted and verifiable,
          guaranteeing trust and transparency.
        </p>
      </div>
      {/* buttons */}
      <div className="flex gap-3  ">
        <div className="btn border border-transparent py-3 px-14 cursor-pointer rounded-lg bg-primary_blue text-lg  transition duration-300 hover:bg-transparent hover:border-white">
          Get started
        </div>
        <div className="btn border py-3 px-8 rounded-lg cursor-pointer text-lg  transition duration-300  hover:bg-primary_blue hover:border-transparent ">
          Learn More
        </div>
      </div>

      {/* The voting steps */}
      <div className=" w-full flex items-center justify-center py-44 rel ">
        <img src={votingsteps} alt="" className="w-6/12 absolute top-72" />
      </div>
    </div>
  );
};

export default Herosection;
