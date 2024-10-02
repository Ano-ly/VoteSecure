import React from "react";
import Navbar from "../components/home/Navbar";
import Herosection from "../components/home/Herosection";
import Features from "../components/home/Features";
import Testimonial from "../components/home/Testimonial";
import Revolution from "../components/home/Revolution";

const Home = () => {
  return (
    <div className="main-hero-bg w-full overflow-x-hidden ">
      <header>
        <Navbar />
      </header>
      <main className='flex flex-col gap-7 overflow-y-auto hide-scrollbar   bg-main_bg_color'>
        <Herosection/>
        <Features/>
        <Testimonial/>
        <Revolution/>
      </main>
    </div>
  );
};

export default Home;
