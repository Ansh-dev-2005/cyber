// create a hero section for a website for cyber security conference use tailwind css

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import { VideoHomeBg } from '../Assets'

const Hero = (props) => {
  return (
    <div className="bg-primary overflow-hidden">
      <div className="w-screen">
        <div className="h-[100vh] bg-video">
          <video autoPlay muted loop className="w-full h-full object-cover brightness-50 absolute -z-50">
            <source
              src={VideoHomeBg}
              type="video/webm"
            />
          </video>
        </div>
      </div>
      <div className="absolute inset-0  flex justify-center items-center">
        <div className=" bg-no-repeat bg-center w-full">
          <Navbar menuItems={props.menu} scroll={true} />
          <section className={` w-full h-2/4 mx-auto`}>
            <div
              className={`absolute inset-0 bottom-16  max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
              <div>
                <h1
                  className={` text-5xl capitalize font-bold leading-relaxed text-white mt-[300px] text-white-100`}
                >
                  International Conference on Advancement 
                  <br className="sm:block hidden" /> in Cyber Security and Digital Forensics
                </h1>
                <p className="text-[#dfd9ff] font-medium text-xl lg:leading-[40px]">
                  April 9-10 | MAC Center, UPES Dehradun
                </p>
                <a
                  class=" relative inline-block py-3 px-6 bg-white cursor-pointer m-0 p-[12px 22px] min-w-[108px] font-[15px] font-bold leading-4 tracking-tight text-center align-middle rounded-3xl touch-manipulation   "
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
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Hero