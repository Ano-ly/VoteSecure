import React from "react";
import Biometric from "../../public/assets/Biometric.png";
import p1 from "../../public/assets/p1.png";
import p2 from "../../public/assets/p2.png";
import p3 from "../../public/assets/p3.png";
import p4 from "../../public/assets/p4.png";
import p5 from "../../public/assets/p5.png";
import p6 from "../../public/assets/p6.png";
import p7 from "../../public/assets/p7.png";
import p8 from "../../public/assets/p8.png";
import p9 from "../../public/assets/p9.png";
import p10 from "../../public/assets/p10.png";
import logo from "../../public/Favicon.webp";
import { useState } from "react";

const Votingpage = () => {
  const [fill, setfill] = useState(false);
  const voteClick = () => {
    setfill(!fill);
  };
  return (
    <div className="bg-main_bg_color flex flex-col items-center justify-center py-14 px-4">
      <div className=" w-10/12 ">
        {/* first div */}
        <div className="flex flex-col items-center text-white text-center mb-6 relative w-full ">
          <div className="absolute left-0 bottom-32 md:left-0 md:top-0 flex items-center font-bold gap-2">
            <img src={logo} alt="" className="w-6" />
            <p className="text-white">
              Vote<span className="text-primary_blue">Secure</span>
            </p>
          </div>
          <img src={Biometric} alt="" className="w-9 sm:w-11 mb-3" />
          <h1 className="text-3xl font-bold mb-2">Vote</h1>
          <p className="text-sm">
            Please select your candidate for each position
          </p>
        </div>
        {/* Second div */}
        <div className="vpage border-2 border-transparent border-t-primary_blue rounded-3xl w-full py-6 px-2 mt-10 sm:px-10  ">
          <div className="flex flex-col gap-4 text-gray-500">
            {/* first voting list */}
            <div className="flex flex-col ">
              <h1 className="text-white text-xl mb-4 md:text-2xl">President</h1>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <img src={p1} alt="" className="w-9" />
                  <p className="text-sm">Kehinde bankole</p>
                </div>
                <div
                  className={` w-3 h-3 border-2 border-primary_blue rounded-lg md:w-4 md:h-4 ${
                    fill ? "bg-transparent" : "bg-primary_blue"
                  } cursor-pointer`}
                  onClick={voteClick}
                ></div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <img src={p2} alt="" className="w-9" />
                  <p className="text-xs md:text-sm">Adewuyui Lekan</p>
                </div>
                <div
                  className={` w-3 h-3 border-2 border-primary_blue rounded-lg md:w-4 md:h-4 ${
                    fill ? "bg-transparent" : "bg-primary_blue"
                  } cursor-pointer`}
                  onClick={voteClick}
                ></div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <img src={p3} alt="" className="w-9" />
                  <p className="text-xs md:text-sm">Popoola Olayide</p>
                </div>
                <div
                  className={` w-3 h-3 border-2 border-primary_blue rounded-lg md:w-4 md:h-4 ${
                    fill ? "bg-transparent" : "bg-primary_blue"
                  } cursor-pointer`}
                  onClick={voteClick}
                ></div>
              </div>
            </div>
            <div className="flex flex-col ">
              <h1 className="text-white text-xl mb-4 md:text-2xl">
                Vice President
              </h1>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <img src={p4} alt="" className="w-9" />
                  <p className="text-xs md:text-sm">Idowu Daniel</p>
                </div>
                <div
                  className={` w-3 h-3 border-2 border-primary_blue rounded-lg md:w-4 md:h-4 ${
                    fill ? "bg-transparent" : "bg-primary_blue"
                  } cursor-pointer`}
                  onClick={voteClick}
                ></div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <img src={p5} alt="" className="w-9" />
                  <p className="text-xs md:text-sm">Michael Olatunde</p>
                </div>
                <div
                  className={` w-3 h-3 border-2 border-primary_blue rounded-lg md:w-4 md:h-4 ${
                    fill ? "bg-transparent" : "bg-primary_blue"
                  } cursor-pointer`}
                  onClick={voteClick}
                ></div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <img src={p6} alt="" className="w-9" />
                  <p className="text-xs md:text-sm">Kehinde Mayowa</p>
                </div>
                <div
                  className={` w-3 h-3 border-2 border-primary_blue rounded-lg md:w-4 md:h-4 ${
                    fill ? "bg-transparent" : "bg-primary_blue"
                  } cursor-pointer`}
                  onClick={voteClick}
                ></div>
              </div>
            </div>
            <div className="flex flex-col ">
              <h1 className="text-white text-xl mb-4 md:text-2xl">
                General Secretary
              </h1>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <img src={p7} alt="" className="w-9" />
                  <p className="text-xs md:text-sm">Kehinde bankole</p>
                </div>
                <div
                  className={` w-3 h-3 border-2 border-primary_blue rounded-lg md:w-4 md:h-4 ${
                    fill ? "bg-transparent" : "bg-primary_blue"
                  } cursor-pointer`}
                  onClick={voteClick}
                ></div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <img src={p8} alt="" className="w-9" />
                  <p className="text-xs md:text-sm">Adewuyui Lekan</p>
                </div>
                <div
                  className={` w-3 h-3 border-2 border-primary_blue rounded-lg md:w-4 md:h-4 ${
                    fill ? "bg-transparent" : "bg-primary_blue"
                  } cursor-pointer`}
                  onClick={voteClick}
                ></div>
              </div>
            </div>
            <div className="flex flex-col ">
              <h1 className="text-white text-xl mb-4 md:text-2xl">
                Public Relations Officer
              </h1>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <img src={p9} alt="" className="w-9" />
                  <p className="text-xs md:text-sm">Oladipo Sharon</p>
                </div>
                <div
                  className={` w-3 h-3 border-2 border-primary_blue rounded-lg md:w-4 md:h-4 ${
                    fill ? "bg-transparent" : "bg-primary_blue"
                  } cursor-pointer`}
                  onClick={voteClick}
                ></div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <img src={p10} alt="" className="w-9" />
                  <p className="text-xs md:text-sm">Adewuyui Lekan</p>
                </div>
                <div
                  className={` w-3 h-3 border-2 border-primary_blue rounded-lg md:w-4 md:h-4 ${
                    fill ? "bg-transparent" : "bg-primary_blue"
                  } cursor-pointer`}
                  onClick={voteClick}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Votingpage;
