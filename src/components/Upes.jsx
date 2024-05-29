import React from 'react'
import { motion } from "framer-motion";
import {styles} from "../styles"
import { fadeIn, textVariant } from "../utils/motion";


const Upes = () => {
  return (
    <div className="bg-white">
      {/* divide div into left and right part */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* left part */}
          <div>
            <motion.h2
              initial="initial"
              animate="animate"
              variants={textVariant}
              className="text-3xl font-semibold pt-3 tracking-tight text-black"
            >
              Get ready to learn at UPES University
            </motion.h2>
            <motion.p
              initial="initial"
              animate="animate"
              variants={textVariant}
              className="mt-4  text-xl text-gray-500 lg:mx-auto"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
              elit, tristique placerat feugiat ac, facilisis vitae arcu. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit,
              tristique placerat feugiat ac, facilisis vitae arcu. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed neque elit,
              tristique placerat feugiat ac, facilisis vitae arcu. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed neque elit,
              tristique placerat feugiat ac, facilisis vitae arcu.
            </motion.p>
          </div>
          {/* right part */}
          <div>
            <img
              className="mt-10 py-3  items-center justify-center w-full h-96 object-cover rounded-lg shadow-lg sm:mt-10"
              src="https://via.placeholder.com/800x400"
              alt="about"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upes