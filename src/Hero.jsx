import React from "react";
import atlas_w_nobg from "./assets/atlas-white-nobg-bgr.png";
import { Link } from "react-scroll";
import {FaChevronRight} from "react-icons/fa"
const Hero = () => {
  return (
    <div
      name='hero'
      className=' m-auto w-full flex flex-col justify-center items-center sm:pt-16 h-screen z-[1] relative'
    >
      <div className='w-full'>
        <div className=' mt-2 sm:mt-0'>
          <div className='flex flex-col justify-center items-center'>
            <img
              src={atlas_w_nobg}
              alt='/'
              className='w-[200px] h-[200px] sm:w-[250px] sm:h-[250px]'
            />
            <h1 className='text-white text-4xl sm:text-6xl font-bold text-center mb-6'>
              ATLAS
            </h1>
            <h1 className='text-white text-4xl sm:text-6xl font-bold text-center'>
              EMPOWER
            </h1>
            <Link to='rsvp' smooth={true} duration={1000} className="mt-8 group">
              <button className="flex justify-center items-center bg-white rounded-lg px-4 py-2">Coming Soon <FaChevronRight className=" group-hover:translate-x-2 duration-300 ml-4"/></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
