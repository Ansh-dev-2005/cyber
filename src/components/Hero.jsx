// create a hero section for a website for cyber security conference use tailwind css

import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import Counter from './Counter';
import Navbar from './Navbar';
const Hero = () => {
  return (
    <div className=" bg-primary">
      <div className=" w-screen ">
        <div className=" h-[600px] bg-video">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source
              src={require("../assets/montage-video-UPES-Web.webm")}
              type="video/webm"
            />
          </video>
        </div>
      </div>
      <div className="absolute inset-0  flex justify-center items-center">
        <div className=" bg-no-repeat bg-center w-full">
          <Navbar />
          <section className={` w-full h-2/4 mx-auto`}>
            <div
              className={`absolute inset-0 bottom-16  max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
              <div>
                <h1
                  className={` text-5xl font-semibold leading-relaxed text-white mt-[300px] text-white-100`}
                >
                  Let’s get you registered
                  <br className="sm:block hidden" /> for ICACSDF
                </h1>
                <p className="text-[#dfd9ff] font-medium text-xl lg:leading-[40px]">
                  June 11-14 | MAC Center, UPES Dehradun
                </p>
                <a
                  class=" relative inline-block py-3 px-6 bg-white cursor-pointer m-0 p-[12px 22px] min-w-[108px] font-[15px] font-bold leading-4 tracking-tight text-center align-middle rounded-3xl touch-manipulation   "
                  // href="https://reg.rainfocus.com/flow/splunk/conf24lasveg/registration-general24"
                  data-track-analytics="true"
                  target="_blank"
                  data-target="#"
                  data-is-back-button="false"
                  data-modalcontent-bookmarkable="false"
                  alt="Register Now"
                >
                  <span class="ga-cta ">Register Now</span>
                </a>
              </div>
              {/* Register Now Button  */}
            </div>
            {/* 
            <div className="absolute xs:bottom-10 bottom-0 w-full flex justify-center items-center">
              <a href="#about">
                <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                  <motion.div
                    animate={{
                      y: [0, 24, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="w-3 h-3 rounded-full bg-secondary mb-1"
                  />
                </div>
              </a>
            </div> */}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hero;