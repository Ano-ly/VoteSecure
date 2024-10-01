import React from 'react';
import Navbar from '../components/home/Navbar';
import Herosection from '../components/home/Herosection';
import Features from '../components/home/Features';
import Testimonial from '../components/home/Testimonial';
import Revolution from '../components/home/Revolution';


const Home = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main className='flex flex-col gap-7 overflow-y-auto   bg-main_bg_color'>
        <div className='font-bold text-4xl gradient-text'><h2>home</h2></div>
        <Herosection/>
        <Features/>
        <Testimonial/>
        <Revolution/>
      </main>
    </div>
  );
};

export default Home;